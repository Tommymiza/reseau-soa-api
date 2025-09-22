import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guard/auth.guard';
import { HelperModule } from './helper/helper.module';
import { LocalisationModule } from './localisation/localisation.module';
import { OpbModule } from './opb/opb.module';
import { OprModule } from './opr/opr.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProducteurModule } from './producteur/producteur.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    HelperModule,
    AuthModule,
    UserModule,
    OprModule,
    OpbModule,
    ProducteurModule,
    LocalisationModule,
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
