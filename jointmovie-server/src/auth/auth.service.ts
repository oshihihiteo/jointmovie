import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from "argon2";
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor (
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService){}

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

  const payload = {
    id: user.id,
    username: user.username
  }

  return {access_token: await this.jwtService.signAsync(payload)}
 }
}

