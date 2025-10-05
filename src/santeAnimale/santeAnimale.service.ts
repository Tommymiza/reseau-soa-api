import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SanteAnimaleService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSanteAnimaleDto: Prisma.SanteAnimaleUncheckedCreateInput) {
    try {
      const santeAnimale = await this.prisma.santeAnimale.create({
        data: createSanteAnimaleDto,
      });
      return santeAnimale;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.SanteAnimaleFindManyArgs) {
    return this.prisma.santeAnimale.findMany(args);
  }

  async findOne(id: number, args?: Prisma.SanteAnimaleFindUniqueArgs) {
    try {
      const santeAnimale = await this.prisma.santeAnimale.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return santeAnimale;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateSanteAnimaleDto: Prisma.SanteAnimaleUncheckedUpdateInput,
  ) {
    try {
      const santeAnimale = await this.prisma.santeAnimale.update({
        where: { id },
        data: updateSanteAnimaleDto,
      });
      return santeAnimale;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const santeAnimale = await this.prisma.santeAnimale.delete({
        where: { id },
      });
      return santeAnimale;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
