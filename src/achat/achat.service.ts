import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AchatService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAchatDto: Prisma.AchatUncheckedCreateInput) {
    try {
      return await this.prisma.achat.create({ data: createAchatDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.AchatFindManyArgs) {
    return this.prisma.achat.findMany(args);
  }

  async findOne(id: number, args?: Prisma.AchatFindUniqueArgs) {
    try {
      return await this.prisma.achat.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateAchatDto: Prisma.AchatUncheckedUpdateInput) {
    try {
      return await this.prisma.achat.update({
        where: { id },
        data: updateAchatDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.achat.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
