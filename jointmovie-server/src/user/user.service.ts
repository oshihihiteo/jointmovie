import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as argon2 from "argon2";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

 async create(createUserDto: CreateUserDto): Promise<User> {
  const {username, password} = createUserDto
  const isUsernameExist = await this.userRepository.findOne({where: {username}})

  if (isUsernameExist) {
    throw new ConflictException('username already exist')
  }

  const passwordHash = await argon2.hash(password)

  const user = this.userRepository.create({username, password: passwordHash, displayname: username})
  return this.userRepository.save(user);
 }
}