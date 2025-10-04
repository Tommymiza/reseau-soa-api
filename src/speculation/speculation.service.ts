import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeculationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSpeculationDto: Prisma.SpeculationUncheckedCreateInput) {
    try {
      return await this.prisma.speculation.create({
        data: createSpeculationDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.SpeculationFindManyArgs) {
    return this.prisma.speculation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.SpeculationFindUniqueArgs) {
    try {
      return await this.prisma.speculation.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateSpeculationDto: Prisma.SpeculationUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.speculation.update({
        where: { id },
        data: updateSpeculationDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.speculation.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
