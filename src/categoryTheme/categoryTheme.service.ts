import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryThemeService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createCategoryThemeDto: Prisma.CategoryThemeAccompagnementUncheckedCreateInput,
  ) {
    try {
      const categoryTheme =
        await this.prisma.categoryThemeAccompagnement.create({
          data: createCategoryThemeDto,
        });
      return categoryTheme;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.CategoryThemeAccompagnementFindManyArgs) {
    return this.prisma.categoryThemeAccompagnement.findMany(args);
  }

  async findOne(
    id: number,
    args?: Prisma.CategoryThemeAccompagnementFindUniqueArgs,
  ) {
    try {
      const categoryTheme =
        await this.prisma.categoryThemeAccompagnement.findUniqueOrThrow({
          where: { id },
          ...args,
        });
      return categoryTheme;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateCategoryThemeDto: Prisma.CategoryThemeAccompagnementUncheckedUpdateInput,
  ) {
    try {
      const categoryTheme =
        await this.prisma.categoryThemeAccompagnement.update({
          where: { id },
          data: updateCategoryThemeDto,
        });
      return categoryTheme;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const categoryTheme =
        await this.prisma.categoryThemeAccompagnement.delete({
          where: { id },
        });
      return categoryTheme;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
