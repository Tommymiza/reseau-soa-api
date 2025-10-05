import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AchatArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAchatArticleDto: Prisma.AchatArticleUncheckedCreateInput) {
    try {
      return await this.prisma.achatArticle.create({
        data: createAchatArticleDto,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.AchatArticleFindManyArgs) {
    return this.prisma.achatArticle.findMany(args);
  }

  async findOne(id: number, args?: Prisma.AchatArticleFindUniqueArgs) {
    try {
      return await this.prisma.achatArticle.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateAchatArticleDto: Prisma.AchatArticleUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.achatArticle.update({
        where: { id },
        data: updateAchatArticleDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.achatArticle.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
