import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: Prisma.OrderCreateInput) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        items: true,
      },
    });
  }

  async update(id: string, updateOrderDto: Prisma.OrderUpdateInput) {
    return this.prisma.order.update({
      where: {
        id,
      },
      data: updateOrderDto,
    });
  }

  async remove(id: string) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}
