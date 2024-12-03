import { WinstonModule, utilities } from "nest-winston";
import * as winston from "winston";
import * as winstonDaily from "winston-daily-rotate-file";

const dailyOption = (level: string, module?: string) => {
  const dirname = module ? `./logs/${module}/${level}` : `./logs/${level}`;
  return {
    level,
    datePattern: "YYYY-MM-DD",
    dirname,
    filename: `%DATE%.${level}.log`,
    maxFiles: 30,
    zippedArchive: true,
    format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike(process.env.NODE_ENV, { colors: false, prettyPrint: true })),
  };
};

// error > warn > info > http > verbose > debug > silly
const winstonOptions = (module?: string) => ({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === "production" ? "error" : "silly",
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike(process.env.NODE_ENV, { colors: true, prettyPrint: true })
      ),
    }),
    new winstonDaily(dailyOption("error", module)),
    new winstonDaily(dailyOption("warn", module)),
    new winstonDaily(dailyOption("info", module)),
    new winstonDaily(dailyOption("http", module)),
    new winstonDaily(dailyOption("verbose", module)),
    new winstonDaily(dailyOption("debug", module)),
    new winstonDaily(dailyOption("silly", module)),
  ],
});
export const WinstonLogger = WinstonModule.createLogger(winstonOptions());
