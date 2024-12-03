import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { WinstonLogger } from "./common/loggers";
import { Logger } from "@nestjs/common";
import { initializeTransactionalContext } from "typeorm-transactional";
import { middleware } from "./app.middleware";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: WinstonLogger });
  middleware(app);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>("PORT");
  // error > warn > log > debug > verbose
  const logger = new Logger("bootstrap");

  await app.listen(PORT, "0.0.0.0");
  logger.error(`http://localhost:${PORT}/api`, { message: "에러발생" });
  logger.warn(`http://localhost:${PORT}/api`);
  logger.log(`http://localhost:${PORT}/api`);
  logger.debug(`http://localhost:${PORT}/api`); // 안나옴
  logger.verbose(`http://localhost:${PORT}/api`);
}
bootstrap();
