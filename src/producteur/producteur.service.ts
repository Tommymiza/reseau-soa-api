import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProducteurService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProducteurDto: Prisma.ProducteurUncheckedCreateInput) {
    try {
      const producteur = await this.prisma.producteur.create({
        data: createProducteurDto,
      });
      return producteur;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ProducteurFindManyArgs) {
    return this.prisma.producteur.findMany(args);
  }

  async findOne(id: number, args?: Prisma.ProducteurFindUniqueArgs) {
    try {
      const producteur = await this.prisma.producteur.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return producteur;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateProducteurDto: Prisma.ProducteurUpdateInput) {
    try {
      const producteur = await this.prisma.producteur.update({
        where: { id },
        data: updateProducteurDto,
      });
      return producteur;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const producteur = await this.prisma.producteur.delete({
        where: { id },
      });
      return producteur;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
