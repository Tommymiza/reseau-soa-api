import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccompagnementProdService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createAccompagnementProdDto: Prisma.AccompagnementProdUncheckedCreateInput,
  ) {
    try {
      const accompagnementProd = await this.prisma.accompagnementProd.create({
        data: createAccompagnementProdDto,
      });
      return accompagnementProd;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.AccompagnementProdFindManyArgs) {
    return this.prisma.accompagnementProd.findMany(args);
  }

  async findOne(id: number, args?: Prisma.AccompagnementProdFindUniqueArgs) {
    try {
      const accompagnementProd =
        await this.prisma.accompagnementProd.findUniqueOrThrow({
          where: { id },
          ...args,
        });
      return accompagnementProd;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateAccompagnementProdDto: Prisma.AccompagnementProdUncheckedUpdateInput,
  ) {
    try {
      const accompagnementProd = await this.prisma.accompagnementProd.update({
        where: { id },
        data: updateAccompagnementProdDto,
      });
      return accompagnementProd;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const accompagnementProd = await this.prisma.accompagnementProd.delete({
        where: { id },
      });
      return accompagnementProd;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
