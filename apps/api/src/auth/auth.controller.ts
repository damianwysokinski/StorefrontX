import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Prisma } from "@prisma/client";
import { RefreshAuthGuard } from "./guards/refresh-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.authService.register(createUserDto);
  }

  @Post("login")
  login(@Body() { email, password }) {
    return this.authService.login(email, password);
  }

  @UseGuards(RefreshAuthGuard)
  @Post("refresh")
  refreshToken(@Request() { email }) {
    return this.authService.refreshToken(email);
  }
}
