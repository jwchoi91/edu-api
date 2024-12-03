import { Resolver, Query } from "@nestjs/graphql";
import { UserService } from "./user.service";
// import { UseGuards } from "@nestjs/common";
// import { GqlAuthGuard } from "@common/guards/gql-auth.guard";
import { Cmuser } from "src/entities/user.entity";

@Resolver(() => Cmuser)
// @UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [Cmuser])
  getAllUser() {
    return this.userService.findAll();
  }
}
