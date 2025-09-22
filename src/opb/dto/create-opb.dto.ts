import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOpbDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  lieu_siege?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  recepisse?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  date_recepisse?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  date_creation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  date_entree_opr?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  objet_opb?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  recu_opr?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  montant_opr?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_opr: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_localisation: number;
}
