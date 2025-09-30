import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, TypePermission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPermissionDto: Prisma.PermissionUncheckedCreateInput) {
    try {
      const permission = await this.prisma.permission.create({
        data: createPermissionDto,
      });
      return permission;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createUserPermissions(allUserPermissions: {
    id: number;
    permissions: {
      permission_id: number;
      type: TypePermission;
    }[];
  }) {
    try {
      await this.prisma.permissions.deleteMany({
        where: { user_id: allUserPermissions.id },
      });
      const permissions = await this.prisma.permissions.createMany({
        data: allUserPermissions.permissions.map((permission) => ({
          user_id: allUserPermissions.id,
          ...permission,
        })),
      });
      return permissions;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll(args?: Prisma.PermissionFindManyArgs) {
    return this.prisma.permission.findMany(args);
  }

  async findOne(id: number, args?: Prisma.PermissionFindUniqueArgs) {
    try {
      const permission = await this.prisma.permission.findUniqueOrThrow({
        where: { id },
        ...args,
      });
      return permission;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updatePermissionDto: Prisma.PermissionUpdateInput) {
    try {
      const permission = await this.prisma.permission.update({
        where: { id },
        data: updatePermissionDto,
      });
      return permission;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const permission = await this.prisma.permission.delete({
        where: { id },
      });
      return permission;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
