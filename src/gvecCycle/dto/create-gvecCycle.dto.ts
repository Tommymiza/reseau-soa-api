import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGvecCycleDto {
  @ApiProperty({ description: 'Numéro du cycle' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  numero: number;

  @ApiProperty({ description: 'Date de début du cycle (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date_debut: Date;

  @ApiProperty({ description: 'Date de fin du cycle (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date_fin: Date;

  @ApiProperty({ description: 'Montant de la part' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_part: number;

  @ApiProperty({ description: 'Montant de la cotisation' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_cotisation: number;

  @ApiProperty({ description: 'Identifiant du GVEC' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_gvec: number;
}
