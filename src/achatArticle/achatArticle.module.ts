import { Module } from '@nestjs/common';
import { AchatArticleController } from './achatArticle.controller';
import { AchatArticleService } from './achatArticle.service';

@Module({
  controllers: [AchatArticleController],
  providers: [AchatArticleService],
})
export class AchatArticleModule {}
