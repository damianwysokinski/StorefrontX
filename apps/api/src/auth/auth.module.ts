import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { PrismaModule } from "src/prisma/prisma.module";
import jwtConfig from "./config/jwt.config";
import { ConfigModule } from "@nestjs/config";
import refreshConfig from "./config/refresh.config";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { RefreshStrategy } from "./strategies/refresh-token.strategy";

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
    ConfigModule.forFeature(refreshConfig),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RefreshStrategy],
})
export class AuthModule {}
