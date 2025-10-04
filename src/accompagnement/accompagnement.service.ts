import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccompagnementOprService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createAccompagnementOprDto: Prisma.AccompagnementOprUncheckedCreateInput,
  ) {
    try {
      const accompagnement = await this.prisma.accompagnementOpr.create({
        data: createAccompagnementOprDto,
      });
      return accompagnement;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.AccompagnementOprFindManyArgs) {
    return this.prisma.accompagnementOpr.findMany(args);
  }

  async findOne(id: number, args?: Prisma.AccompagnementOprFindUniqueArgs) {
    try {
      const accompagnement =
        await this.prisma.accompagnementOpr.findUniqueOrThrow({
          where: { id },
          ...args,
        });
      return accompagnement;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateAccompagnementOprDto: Prisma.AccompagnementOprUncheckedUpdateInput,
  ) {
    try {
      const accompagnement = await this.prisma.accompagnementOpr.update({
        where: { id },
        data: updateAccompagnementOprDto,
      });
      return accompagnement;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const accompagnement = await this.prisma.accompagnementOpr.delete({
        where: { id },
      });
      return accompagnement;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
