import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guard/auth.guard';
import { HelperModule } from './helper/helper.module';
import { LocalisationModule } from './localisation/localisation.module';
import { OpbModule } from './opb/opb.module';
import { OprModule } from './opr/opr.module';
import { PermissionModule } from './permission/permission.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProducteurModule } from './producteur/producteur.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
      global: true,
    }),
    PrismaModule,
    HelperModule,
    AuthModule,
    LocalisationModule,
    OpbModule,
    OprModule,
    PermissionModule,
    ProducteurModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
