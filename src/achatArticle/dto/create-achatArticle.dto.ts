import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAchatArticleDto {
  @ApiProperty({ description: 'Quantité achetée' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  quantite: number;

  @ApiProperty({ description: "Identifiant de l'article" })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_article: number;

  @ApiProperty({ description: "Identifiant de l'achat" })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_achat: number;
}
