import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommercialisationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createCommercialisationDto: Prisma.CommercialisationUncheckedCreateInput,
  ) {
    try {
      return await this.prisma.commercialisation.create({
        data: createCommercialisationDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.CommercialisationFindManyArgs) {
    return this.prisma.commercialisation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.CommercialisationFindUniqueArgs) {
    try {
      return await this.prisma.commercialisation.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateCommercialisationDto: Prisma.CommercialisationUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.commercialisation.update({
        where: { id },
        data: updateCommercialisationDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.commercialisation.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
