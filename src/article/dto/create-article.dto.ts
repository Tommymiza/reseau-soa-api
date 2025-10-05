import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ description: "Nom de l'article" })
  @IsNotEmpty()
  @IsString()
  nom: string;
}
