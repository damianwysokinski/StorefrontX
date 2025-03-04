import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) { }

  async create(createCustomerDto: Prisma.CustomerCreateInput) {
    return this.prisma.customer.create({
      data: createCustomerDto,
    });
  }

  async findAll() {
    return this.prisma.customer.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.customer.findUnique({
      where: { id }
    });
  }

  async update(id: string, updateCustomerDto: Prisma.CustomerUpdateInput) {
    return this.prisma.customer.update({
      where: {
        id,
      },
      data: updateCustomerDto,
    });
  }

  async remove(id: string) {
    return this.prisma.customer.delete({
      where: {
        id,
      },
    });
  }
}
