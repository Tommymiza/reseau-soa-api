import { PartialType } from '@nestjs/swagger';
import { CreateGvecCycleDto } from './create-gvecCycle.dto';

export class UpdateGvecCycleDto extends PartialType(CreateGvecCycleDto) {}
