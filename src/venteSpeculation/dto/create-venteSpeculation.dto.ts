import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVenteSpeculationDto {
  @ApiProperty({ description: 'Quantité vendue' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  quantite: number;

  @ApiProperty({ description: 'Identifiant de la spéculation' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_speculation: number;

  @ApiProperty({ description: 'Identifiant de la commercialisation' })
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  id_commercialisation: number;
}
