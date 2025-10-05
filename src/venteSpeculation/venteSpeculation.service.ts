import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VenteSpeculationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createVenteSpeculationDto: Prisma.VenteSpeculationUncheckedCreateInput,
  ) {
    try {
      return await this.prisma.venteSpeculation.create({
        data: createVenteSpeculationDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.VenteSpeculationFindManyArgs) {
    return this.prisma.venteSpeculation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.VenteSpeculationFindUniqueArgs) {
    try {
      return await this.prisma.venteSpeculation.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateVenteSpeculationDto: Prisma.VenteSpeculationUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.venteSpeculation.update({
        where: { id },
        data: updateVenteSpeculationDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.venteSpeculation.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
