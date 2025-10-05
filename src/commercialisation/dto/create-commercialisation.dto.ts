import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommercialisationDto {
  @ApiProperty({ description: 'Date de la commercialisation (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({ description: "Identifiant de l'OPR" })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_opr: number;

  @ApiProperty({ description: 'Nom du partenaire' })
  @IsNotEmpty()
  @IsString()
  partenaire: string;
}
