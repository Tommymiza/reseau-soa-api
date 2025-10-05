import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateRepresentationProdDto {
  @ApiProperty({ description: 'ID du producteur' })
  @IsNotEmpty()
  @IsInt()
  id_producteur: number;

  @ApiProperty({ description: 'ID de la représentation' })
  @IsNotEmpty()
  @IsInt()
  id_representation: number;
}
