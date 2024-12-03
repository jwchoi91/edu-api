import { ClassSerializerInterceptor, Controller, Get, Param, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.userService.findAll();
  }

  @Get(":login_id")
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param("login_id") login_id: string) {
    return this.userService.findOne(login_id);
  }
}
