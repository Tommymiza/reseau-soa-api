import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGvecDto {
  @ApiProperty({ description: 'Nom du GVEC' })
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty({ description: 'Date de création du GVEC (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({ description: 'Identifiant de la localisation' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_localisation: number;
}
