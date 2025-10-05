import { PartialType } from '@nestjs/swagger';
import { CreateAchatArticleDto } from './create-achatArticle.dto';

export class UpdateAchatArticleDto extends PartialType(CreateAchatArticleDto) {}
