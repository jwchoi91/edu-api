import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { join } from "path";
import { ConfigService } from "@nestjs/config";

export const createTypeOrmOptions = (configService: ConfigService): TypeOrmModuleOptions & SeederOptions & DataSourceOptions => {
  return {
    type: "mariadb",
    host: configService.get("DATABASE_HOST"),
    port: +configService.get("DATABASE_PORT"),
    username: configService.get("DATABASE_USERNAME"),
    password: configService.get("DATABASE_PASSWORD"),
    database: configService.get("DATABASE_NAME"),
    entities: [join(__dirname, "../../entities/*.entity{.ts,.js}")],
    migrations: [join(__dirname, "./../database/migrations/*{.ts,.js}")],
    seeds: [join(__dirname, "./../database/seeds/*{.ts,.js}")],
    ssl: {
      rejectUnauthorized: false, // ssl 인증 안하겠다
    },
    synchronize: false,
    logging: true,
    // timezone: "Z",
    extra: {
      connectionLimit: 300,
      charset: "utf8mb4_unicode_ci",
    },
  };
};
