import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateRepresentationDto {
  @ApiProperty({ description: 'Date de la représentation (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    description: 'Durée de la représentation (en minutes)',
    required: false,
  })
  @IsOptional()
  @IsInt()
  duree?: number;

  @ApiProperty({ description: 'Thème de la représentation' })
  @IsNotEmpty()
  @IsString()
  theme: string;

  @ApiProperty({ description: 'Problématique', required: false })
  @IsOptional()
  @IsString()
  problematique?: string;

  @ApiProperty({ description: 'Positionnement', required: false })
  @IsOptional()
  @IsString()
  positionnement?: string;

  @ApiProperty({ description: 'Résultat', required: false })
  @IsOptional()
  @IsString()
  resultat?: string;

  @ApiProperty({ description: 'Suite à donner', required: false })
  @IsOptional()
  @IsString()
  suite_a_donner?: string;

  @ApiProperty({ description: "ID de l'OPR concerné" })
  @IsNotEmpty()
  @IsInt()
  id_opr: number;
}
