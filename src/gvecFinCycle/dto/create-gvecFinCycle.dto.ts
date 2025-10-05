import { ApiProperty } from '@nestjs/swagger';
import { GVECFonction } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateGvecFinCycleDto {
  @ApiProperty({ description: 'Identifiant du producteur' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_producteur: number;

  @ApiProperty({ description: 'Fonction dans le GVEC', enum: GVECFonction })
  @IsNotEmpty()
  @IsEnum(GVECFonction)
  fonction: GVECFonction;

  @ApiProperty({ description: 'Nombre de parts' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  nb_part: number;

  @ApiProperty({ description: 'Montant de la part' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_part: number;

  @ApiProperty({ description: 'Montant des intérêts' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_interet: number;

  @ApiProperty({ description: 'Montant total' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  montant_total: number;

  @ApiProperty({ description: 'Identifiant du cycle GVEC' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_gvec_cycle: number;
}
