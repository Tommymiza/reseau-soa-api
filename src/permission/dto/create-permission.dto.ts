import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ description: 'Nom de la table' })
  @IsNotEmpty()
  @IsString()
  nom: string;
}
