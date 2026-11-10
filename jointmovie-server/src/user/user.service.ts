import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as argon2 from "argon2";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
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

 async login(loginUserDto: LoginUserDto){
  const {username, password} = loginUserDto
  const user = await this.userRepository.findOne({
    where: {username},
    select: {
      password: true
    }
  }
  )

  if (!user || !await argon2.verify(user.password, password)){
   throw new UnauthorizedException('Invalid credentials');
  }

 }
}