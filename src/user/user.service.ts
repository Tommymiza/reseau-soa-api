import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt-ts';

// import { hashSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: Prisma.UserUncheckedCreateInput) {
    try {
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashSync(createUserDto.password, 10),
        },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.UserFindManyArgs) {
    return this.prisma.user.findMany(args);
  }

  async findOne(id: number, args?: Prisma.UserFindUniqueArgs) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateUserDto: Prisma.UserUncheckedUpdateInput) {
    try {
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({
        where: { id },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
