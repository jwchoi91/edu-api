import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { RestAuthGuard } from "./common/guards";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(RestAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
