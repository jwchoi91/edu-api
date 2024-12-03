import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cmuser } from "src/entities/user.entity";
import { UserResolver } from "./user.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([Cmuser])],
  controllers: [UserController],
  providers: [UserResolver, UserService],
})
export class UserModule {}
