import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { CustomersModule } from "./customers/customers.module";
import { OrdersModule } from "./orders/orders.module";

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CustomersModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
