import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAccompagnementProdDto {
  @ApiProperty({ description: 'ID du producteur' })
  @IsNotEmpty()
  @IsInt()
  id_producteur: number;

  @ApiProperty({ description: "ID de l'accompagnement" })
  @IsNotEmpty()
  @IsInt()
  id_type_accompagnement: number;
}
