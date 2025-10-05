import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GvecCycleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGvecCycleDto: Prisma.GVECCycleUncheckedCreateInput) {
    try {
      return await this.prisma.gVECCycle.create({ data: createGvecCycleDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.GVECCycleFindManyArgs) {
    return this.prisma.gVECCycle.findMany(args);
  }

  async findOne(id: number, args?: Prisma.GVECCycleFindUniqueArgs) {
    try {
      return await this.prisma.gVECCycle.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateGvecCycleDto: Prisma.GVECCycleUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.gVECCycle.update({
        where: { id },
        data: updateGvecCycleDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.gVECCycle.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
