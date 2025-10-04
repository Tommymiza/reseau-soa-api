import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JeuneService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJeuneDto: Prisma.JeuneUncheckedCreateInput) {
    try {
      return await this.prisma.jeune.create({ data: createJeuneDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.JeuneFindManyArgs) {
    return this.prisma.jeune.findMany(args);
  }

  async findOne(id: number, args?: Prisma.JeuneFindUniqueArgs) {
    try {
      return await this.prisma.jeune.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateJeuneDto: Prisma.JeuneUncheckedUpdateInput) {
    try {
      return await this.prisma.jeune.update({
        where: { id },
        data: updateJeuneDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.jeune.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
