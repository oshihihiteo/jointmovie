import { Controller, Get, Post } from "@nestjs/common";

@Controller()
export class UserController{
  @Get()
  public getUser(){}

  @Post()
  public createUser(){}
}