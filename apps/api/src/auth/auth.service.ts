import { PrismaService } from "./../prisma/prisma.service";
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { UsersService } from "src/users/users.service";
import refreshConfig from "./config/refresh.config";
import { ConfigType } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private prisma: PrismaService,
    private jwtService: JwtService,
    @Inject(refreshConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshConfig>,
  ) {}

  async register(createUserDto: Prisma.UserCreateInput) {
    const user = await this.usersService.findByEmail(createUserDto.email);

    if (user) throw new ConflictException("User already exists!");

    return this.usersService.create(createUserDto);
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    const { accessToken, refreshToken } = await this.generateTokens(user.email);

    return {
      user: {
        email,
      },
      accessToken,
      refreshToken,
    };
  }

  async generateTokens(email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({ email }),
      this.jwtService.signAsync({ email }, this.refreshTokenConfig),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(email: string) {
    const { accessToken, refreshToken } = await this.generateTokens(email);

    return {
      user: {
        email,
      },
      accessToken,
      refreshToken,
    };
  }
}
