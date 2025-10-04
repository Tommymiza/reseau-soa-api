import { ApiProperty } from '@nestjs/swagger';
import { TypeAccompagnateur } from '@prisma/client';
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSuiviJeuneDto {
  @ApiProperty({ description: 'Date du suivi (format ISO)' })
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @ApiProperty({ description: 'Identifiant du jeune concerné' })
  @IsNotEmpty()
  @IsInt()
  id_jeune: number;

  @ApiProperty({ description: 'Déroulement du suivi' })
  @IsNotEmpty()
  @IsString()
  deroulement: string;

  @ApiProperty({
    description: "Type d'accompagnateur",
    enum: TypeAccompagnateur,
    required: false,
  })
  @IsOptional()
  @IsEnum(TypeAccompagnateur)
  type_accompagnateur?: TypeAccompagnateur;
}
