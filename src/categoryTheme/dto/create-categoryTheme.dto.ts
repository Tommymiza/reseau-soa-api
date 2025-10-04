import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryThemeDto {
  @ApiProperty({ description: 'Nom du categoryTheme' })
  @IsNotEmpty()
  @IsString()
  nom: string;
}
