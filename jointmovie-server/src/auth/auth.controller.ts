import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService){}
  
    @Post('login')
    public login(@Body() loginUserDto: LoginUserDto){
      return this.authService.login(loginUserDto)
      
    }
}
