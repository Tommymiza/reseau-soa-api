import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OpbService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOpbDto: Prisma.OPBUncheckedCreateInput) {
    try {
      const opb = await this.prisma.oPB.create({
        data: createOpbDto,
      });
      return opb;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.OPBFindManyArgs) {
    return this.prisma.oPB.findMany(args);
  }

  async findOne(id: number, args?: Prisma.OPBFindUniqueArgs) {
    try {
      const opb = await this.prisma.oPB.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return opb;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateOpbDto: Prisma.OPBUpdateInput) {
    try {
      const opb = await this.prisma.oPB.update({
        where: { id },
        data: updateOpbDto,
      });
      return opb;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const opb = await this.prisma.oPB.delete({
        where: { id },
      });
      return opb;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
