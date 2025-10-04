import { ApiProperty } from '@nestjs/swagger';
import { TypeAccompagnement } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAccompagnementOprDto {
  @ApiProperty({ description: "Date de l'accompagnement (format ISO)" })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    description: "Durée de l'accompagnement (en minutes)",
    required: false,
  })
  @IsOptional()
  @IsInt()
  duree?: number;

  @ApiProperty({ description: "Thème de l'accompagnement" })
  @IsNotEmpty()
  @IsString()
  theme: string;

  @ApiProperty({ description: 'État ou situation existante', required: false })
  @IsOptional()
  @IsString()
  existant?: string;

  @ApiProperty({ description: 'Problématique identifiée', required: false })
  @IsOptional()
  @IsString()
  problematique?: string;

  @ApiProperty({ description: 'Solution proposée', required: false })
  @IsOptional()
  @IsString()
  solution?: string;

  @ApiProperty({ description: 'Remarques ou observations', required: false })
  @IsOptional()
  @IsString()
  remarque?: string;

  @ApiProperty({
    description:
      "Type d'accompagnement (ACCOMPAGNEMENT_SUIVI, VISITE_ECHANGE, FORMATION)",
    enum: TypeAccompagnement,
  })
  @IsNotEmpty()
  @IsEnum(TypeAccompagnement)
  type: TypeAccompagnement;

  @ApiProperty({ description: 'ID de la catégorie du thème' })
  @IsNotEmpty()
  @IsInt()
  id_category_theme: number;

  @ApiProperty({ description: "ID de l'OPR concerné" })
  @IsNotEmpty()
  @IsInt()
  id_opr: number;
}
