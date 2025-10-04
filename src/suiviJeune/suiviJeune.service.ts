import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuiviJeuneService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSuiviJeuneDto: Prisma.SuiviJeuneUncheckedCreateInput) {
    try {
      return await this.prisma.suiviJeune.create({ data: createSuiviJeuneDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.SuiviJeuneFindManyArgs) {
    return this.prisma.suiviJeune.findMany(args);
  }

  async findOne(id: number, args?: Prisma.SuiviJeuneFindUniqueArgs) {
    try {
      return await this.prisma.suiviJeune.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateSuiviJeuneDto: Prisma.SuiviJeuneUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.suiviJeune.update({
        where: { id },
        data: updateSuiviJeuneDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.suiviJeune.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
