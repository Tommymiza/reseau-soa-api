import { ApiProperty } from '@nestjs/swagger';
import { Sexe } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProducteurDto {
  @ApiProperty({ description: 'Nom du producteur' })
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty({ description: 'Code interne du producteur', required: false })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Prénom du producteur', required: false })
  @IsOptional()
  @IsString()
  prenom?: string;

  @ApiProperty({ description: "Sexe du producteur (ex: 'H' ou 'F')" })
  @IsNotEmpty()
  @IsString()
  sexe: Sexe;

  @ApiProperty({ description: 'Année de naissance', required: false })
  @IsOptional()
  @IsInt()
  annee_naissance?: number;

  @ApiProperty({ description: 'Numéro CIN', required: false })
  @IsOptional()
  @IsString()
  cin?: string;

  @ApiProperty({ description: 'Date de délivrance du CIN', required: false })
  @IsOptional()
  @IsDateString()
  date_cin?: Date;

  @ApiProperty({ description: "Niveau d'instruction", required: false })
  @IsOptional()
  @IsString()
  niveau_instruction?: string;

  @ApiProperty({ description: 'Lieu de délivrance du CIN', required: false })
  @IsOptional()
  @IsString()
  lieu_cin?: string;

  @ApiProperty({ description: 'Téléphone principal', required: false })
  @IsOptional()
  @IsString()
  tel1?: string;

  @ApiProperty({ description: 'Téléphone secondaire', required: false })
  @IsOptional()
  @IsString()
  tel2?: string;

  @ApiProperty({ description: 'Date de naissance', required: false })
  @IsOptional()
  @IsDateString()
  date_naissance?: Date;

  @ApiProperty({ description: 'Est marié ?' })
  @IsNotEmpty()
  @IsBoolean()
  marie: boolean;

  @ApiProperty({ description: 'Nom du conjoint', required: false })
  @IsOptional()
  @IsString()
  nom_conjoint?: string;

  @ApiProperty({
    description: "Nombre d'enfants à charge (garçons)",
    required: false,
  })
  @IsOptional()
  @IsInt()
  nb_enfant_a_charge_m?: number;

  @ApiProperty({
    description: "Nombre d'enfants à charge (filles)",
    required: false,
  })
  @IsOptional()
  @IsInt()
  nb_enfant_a_charge_f?: number;

  @ApiProperty({ description: 'Nom du chef de famille', required: false })
  @IsOptional()
  @IsString()
  nom_chef_famille?: string;

  @ApiProperty({ description: 'Actif ou non', required: false })
  @IsOptional()
  @IsBoolean()
  actif?: boolean;

  @ApiProperty({ description: "Date d'entrée dans l'OPB", required: false })
  @IsOptional()
  @IsDateString()
  date_entree_opb?: Date;

  @ApiProperty({ description: 'ID de localisation', required: false })
  @IsOptional()
  @IsInt()
  id_localisation?: number;

  @ApiProperty({ description: "ID de l'OPB" })
  @IsNotEmpty()
  @IsInt()
  id_opb: number;
}
