import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GvecFinCycleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGvecFinCycleDto: Prisma.GVECFinCycleUncheckedCreateInput) {
    try {
      return await this.prisma.gVECFinCycle.create({
        data: createGvecFinCycleDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.GVECFinCycleFindManyArgs) {
    return this.prisma.gVECFinCycle.findMany(args);
  }

  async findOne(id: number, args?: Prisma.GVECFinCycleFindUniqueArgs) {
    try {
      return await this.prisma.gVECFinCycle.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateGvecFinCycleDto: Prisma.GVECFinCycleUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.gVECFinCycle.update({
        where: { id },
        data: updateGvecFinCycleDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.gVECFinCycle.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
