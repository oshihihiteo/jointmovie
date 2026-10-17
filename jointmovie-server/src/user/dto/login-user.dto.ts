import { IsString, Length, MinLength } from "class-validator";

export class LoginUserDto {

  @IsString()
  @Length(2,50)
  readonly username!: string;

  @IsString()
  @MinLength(8)
  readonly password!: string
}