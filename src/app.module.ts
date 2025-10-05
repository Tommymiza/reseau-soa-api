import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AccompagnementOprModule } from './accompagnement/accompagnement.module';
import { AccompagnementProdModule } from './accompagnementProd/accompagnementProd.module';
import { AchatModule } from './achat/achat.module';
import { AchatArticleModule } from './achatArticle/achatArticle.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { CategoryThemeModule } from './categoryTheme/categoryTheme.module';
import { AuthGuard } from './guard/auth.guard';
import { GvecModule } from './gvec/gvec.module';
import { GvecCycleModule } from './gvecCycle/gvecCycle.module';
import { GvecFinCycleModule } from './gvecFinCycle/gvecFinCycle.module';
import { GvecRealisationModule } from './gvecRealisation/gvecRealisation.module';
import { HelperModule } from './helper/helper.module';
import { JeuneModule } from './jeune/jeune.module';
import { LocalisationModule } from './localisation/localisation.module';
import { OpbModule } from './opb/opb.module';
import { OprModule } from './opr/opr.module';
import { PermissionModule } from './permission/permission.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProducteurModule } from './producteur/producteur.module';
import { SpeculationModule } from './speculation/speculation.module';
import { SuiviJeuneModule } from './suiviJeune/suiviJeune.module';
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
    AccompagnementOprModule,
    AccompagnementProdModule,
    AchatModule,
    AchatArticleModule,
    ArticleModule,
    GvecModule,
    GvecCycleModule,
    GvecRealisationModule,
    GvecFinCycleModule,
    JeuneModule,
    CategoryThemeModule,
    LocalisationModule,
    OpbModule,
    OprModule,
    PermissionModule,
    ProducteurModule,
    SpeculationModule,
    SuiviJeuneModule,
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
