import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocalisationService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createLocalisationDto: Prisma.LocalisationUncheckedCreateInput) {
    try {
      const localisation = await this.prisma.localisation.create({
        data: createLocalisationDto,
      });
      return localisation;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.LocalisationFindManyArgs) {
    return this.prisma.localisation.findMany(args);
  }

  async findOne(id: number, args?: Prisma.LocalisationFindUniqueArgs) {
    try {
      const localisation = await this.prisma.localisation.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return localisation;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateLocalisationDto: Prisma.LocalisationUpdateInput,
  ) {
    try {
      const localisation = await this.prisma.localisation.update({
        where: { id },
        data: updateLocalisationDto,
      });
      return localisation;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const localisation = await this.prisma.localisation.delete({
        where: { id },
      });
      return localisation;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
