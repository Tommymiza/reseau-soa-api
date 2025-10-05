import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepresentationService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createRepresentationDto: Prisma.RepresentationUncheckedCreateInput,
  ) {
    try {
      const representation = await this.prisma.representation.create({
        data: createRepresentationDto,
      });
      return representation;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.RepresentationFindManyArgs) {
    return this.prisma.representation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.RepresentationFindUniqueArgs) {
    try {
      const representation = await this.prisma.representation.findUniqueOrThrow(
        {
          where: { id },
          ...args,
        },
      );
      return representation;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateRepresentationDto: Prisma.RepresentationUncheckedUpdateInput,
  ) {
    try {
      const representation = await this.prisma.representation.update({
        where: { id },
        data: updateRepresentationDto,
      });
      return representation;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const representation = await this.prisma.representation.delete({
        where: { id },
      });
      return representation;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
