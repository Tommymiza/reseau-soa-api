import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGvecRealisationDto {
  @ApiProperty({ description: 'Numéro de réalisation' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  numero: number;

  @ApiProperty({ description: 'Date de la réalisation (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({ description: 'Total famangina' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_famangina: number;

  @ApiProperty({ description: 'Nombre novangina' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  nb_novangina: number;

  @ApiProperty({ description: 'Total caisse sociale' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_caisse_sociale: number;

  @ApiProperty({ description: 'Total remboursement' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_remboursement: number;

  @ApiProperty({ description: 'Total intérêt' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_interet: number;

  @ApiProperty({ description: 'Nombre de remboursant' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  nb_remboursant: number;

  @ApiProperty({ description: 'Total crédit' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_credit: number;

  @ApiProperty({ description: 'Nombre octroyé' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  nb_octroye: number;

  @ApiProperty({ description: 'Total caisse épargne' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  total_caisse_epargne: number;

  @ApiProperty({ description: 'Identifiant du cycle GVEC' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_gvec_cycle: number;
}
