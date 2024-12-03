import { Module } from "@nestjs/common";
import { AuthUserStrategy } from "src/common/strategies";

@Module({
  imports: [],
  providers: [AuthUserStrategy],
})
export class AuthModule {}
