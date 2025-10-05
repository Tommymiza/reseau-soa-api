import { PartialType } from '@nestjs/swagger';
import { CreateVenteSpeculationDto } from './create-venteSpeculation.dto';

export class UpdateVenteSpeculationDto extends PartialType(
  CreateVenteSpeculationDto,
) {}
