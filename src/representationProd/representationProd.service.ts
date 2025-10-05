import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepresentationProdService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createRepresentationProdDto: Prisma.RepresentationProdUncheckedCreateInput,
  ) {
    try {
      const representationProd = await this.prisma.representationProd.create({
        data: createRepresentationProdDto,
      });
      return representationProd;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.RepresentationProdFindManyArgs) {
    return this.prisma.representationProd.findMany(args);
  }

  async findOne(id: number, args?: Prisma.RepresentationProdFindUniqueArgs) {
    try {
      const representationProd =
        await this.prisma.representationProd.findUniqueOrThrow({
          where: { id },
          ...args,
        });
      return representationProd;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateRepresentationProdDto: Prisma.RepresentationProdUncheckedUpdateInput,
  ) {
    try {
      const representationProd = await this.prisma.representationProd.update({
        where: { id },
        data: updateRepresentationProdDto,
      });
      return representationProd;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const representationProd = await this.prisma.representationProd.delete({
        where: { id },
      });
      return representationProd;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
