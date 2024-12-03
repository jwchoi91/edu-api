import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { createTypeOrmOptions } from "./common/config";
import { addTransactionalDataSource } from "typeorm-transactional";
import { DataSource } from "typeorm";
import { UserModule } from "./modules/user/user.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return createTypeOrmOptions(config);
      },
      async dataSourceFactory(option) {
        if (!option) throw new Error("Invalid options passed");
        return addTransactionalDataSource(new DataSource(option));
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: join(__dirname, "./common", "schema.gql"),
      sortSchema: true,
      formatError: (error) => {
        return {
          message: error.message,
          extensions: error.extensions,
        };
      },
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
