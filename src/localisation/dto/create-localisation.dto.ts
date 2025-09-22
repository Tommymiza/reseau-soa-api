import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLocalisationDto {
  @ApiProperty({ description: 'Nom de la localisation' })
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty({ description: 'Identifiant du fokontany' })
  @IsNotEmpty()
  @IsInt()
  id_fokontany: number;

  @ApiProperty({ description: 'Longitude', required: false, example: 47.5321 })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({ description: 'Latitude', required: false, example: -18.8792 })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({
    description: 'Nom courant (autre appellation)',
    required: false,
  })
  @IsOptional()
  @IsString()
  nom_courant?: string;
}
