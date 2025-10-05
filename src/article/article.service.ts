import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: Prisma.ArticleUncheckedCreateInput) {
    try {
      return await this.prisma.article.create({ data: createArticleDto });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.ArticleFindManyArgs) {
    return this.prisma.article.findMany(args);
  }

  async findOne(id: number, args?: Prisma.ArticleFindUniqueArgs) {
    try {
      return await this.prisma.article.findUniqueOrThrow({
        where: { id },
        ...args,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(
    id: number,
    updateArticleDto: Prisma.ArticleUncheckedUpdateInput,
  ) {
    try {
      return await this.prisma.article.update({
        where: { id },
        data: updateArticleDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.article.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
