import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cmuser } from "src/entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Cmuser)
    private readonly repository: Repository<Cmuser>
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(login_id: string) {
    return this.repository.find({ where: { login_id } });
  }
}
