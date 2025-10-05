import { ApiProperty } from '@nestjs/swagger';
import { TypeSanteAnimale } from '@prisma/client';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSanteAnimaleDto {
  @ApiProperty({ description: 'Date de la santé animale (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({
    description: 'Type de santé animale',
    enum: TypeSanteAnimale,
  })
  @IsNotEmpty()
  @IsEnum(TypeSanteAnimale)
  type: TypeSanteAnimale;

  @ApiProperty({ description: "Type d'animale" })
  @IsNotEmpty()
  @IsString()
  type_animale: string;

  @ApiProperty({ description: 'Médicament utilisé', required: false })
  @IsOptional()
  @IsString()
  medicament_utilise?: string;

  @ApiProperty({ description: 'Origine du médicament', required: false })
  @IsOptional()
  @IsString()
  origine_medicament?: string;

  @ApiProperty({ description: 'Lot', required: false })
  @IsOptional()
  @IsString()
  lot?: string;

  @ApiProperty({ description: "Nombre d'animaux" })
  @IsNotEmpty()
  @IsInt()
  nb_animaux: number;

  @ApiProperty({ description: 'Dose utilisée', required: false })
  @IsOptional()
  @IsString()
  dose_utilisee?: string;

  @ApiProperty({ description: 'Prix unitaire de la dose' })
  @IsNotEmpty()
  @IsNumber()
  pu_dose: number;

  @ApiProperty({ description: 'ID du producteur' })
  @IsNotEmpty()
  @IsInt()
  id_producteur: number;

  @ApiProperty({ description: "ID de l'OPR" })
  @IsNotEmpty()
  @IsInt()
  id_opr: number;

  @ApiProperty({ description: 'ID du vétérinaire', required: false })
  @IsOptional()
  @IsInt()
  id_veternaire?: number;

  @ApiProperty({ description: 'Autre information', required: false })
  @IsOptional()
  @IsString()
  autre?: string;
}
