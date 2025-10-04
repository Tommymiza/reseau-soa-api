import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateJeuneDto {
  @ApiProperty({ description: "Date de l'entrée du jeune (format ISO)" })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({ description: "Accompagnement par l'OP", required: false })
  @IsOptional()
  @IsString()
  accompagnement_op?: string;

  @ApiProperty({ description: 'Accompagnement par le parrain', required: false })
  @IsOptional()
  @IsString()
  accompagnement_parrain?: string;

  @ApiProperty({ description: 'Identifiant du jeune (producteur)' })
  @IsNotEmpty()
  @IsInt()
  id_producteur: number;

  @ApiProperty({ description: 'Identifiant du parrain', required: false })
  @IsOptional()
  @IsInt()
  id_parrain?: number;

  @ApiProperty({ description: 'Titre du projet', required: false })
  @IsOptional()
  @IsString()
  titre_projet?: string;

  @ApiProperty({ description: "Montant d'apport personnel", required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_apport?: number;

  @ApiProperty({ description: 'Montant de la subvention', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_subvention?: number;

  @ApiProperty({ description: 'Identifiant de la spéculation', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  id_speculation?: number;
}
