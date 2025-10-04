import { ApiProperty } from '@nestjs/swagger';
import { TypeSpeculation } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateSpeculationDto {
  @ApiProperty({ description: 'Nom de la spéculation' })
  @IsNotEmpty()
  @IsString()
  nom: string;

  @ApiProperty({ enum: TypeSpeculation })
  @IsNotEmpty()
  @IsEnum(TypeSpeculation)
  type: TypeSpeculation;
}
