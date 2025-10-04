import { PartialType } from '@nestjs/swagger';
import { CreateSpeculationDto } from './create-speculation.dto';

export class UpdateSpeculationDto extends PartialType(CreateSpeculationDto) {}
