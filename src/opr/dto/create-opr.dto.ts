import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOprDto {
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

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_localisation: number;
}
