import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GvecRealisationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createGvecRealisationDto: Prisma.GVECRealisationUncheckedCreateInput,
  ) {
    try {
      return await this.prisma.gVECRealisation.create({
        data: createGvecRealisationDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.GVECRealisationFindManyArgs) {
    return this.prisma.gVECRealisation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.GVECRealisationFindUniqueArgs) {
    try {
      return await this.prisma.gVECRealisation.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateGvecRealisationDto: Prisma.GVECRealisationUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.gVECRealisation.update({
        where: { id },
        data: updateGvecRealisationDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.gVECRealisation.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
