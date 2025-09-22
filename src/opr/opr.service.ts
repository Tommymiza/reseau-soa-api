import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OprService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOprDto: Prisma.OPRUncheckedCreateInput) {
    try {
      console.log(createOprDto);
      const opr = await this.prisma.oPR.create({
        data: createOprDto,
      });
      return opr;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.OPRFindManyArgs) {
    return this.prisma.oPR.findMany(args);
  }

  async findOne(id: number, args?: Prisma.OPRFindUniqueArgs) {
    try {
      const opr = await this.prisma.oPR.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return opr;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateOprDto: Prisma.OPRUpdateInput) {
    try {
      const opr = await this.prisma.oPR.update({
        where: { id },
        data: updateOprDto,
      });
      return opr;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const opr = await this.prisma.oPR.delete({
        where: { id },
      });
      return opr;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
