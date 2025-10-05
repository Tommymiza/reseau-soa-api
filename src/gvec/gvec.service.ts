import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GvecService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGvecDto: Prisma.GVECUncheckedCreateInput) {
    try {
      return await this.prisma.gVEC.create({ data: createGvecDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.GVECFindManyArgs) {
    return this.prisma.gVEC.findMany(args);
  }

  async findOne(id: number, args?: Prisma.GVECFindUniqueArgs) {
    try {
      return await this.prisma.gVEC.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateGvecDto: Prisma.GVECUncheckedUpdateInput) {
    try {
      return await this.prisma.gVEC.update({
        where: { id },
        data: updateGvecDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.gVEC.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
