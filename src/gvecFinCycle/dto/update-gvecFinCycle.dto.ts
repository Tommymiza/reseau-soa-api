import { PartialType } from '@nestjs/swagger';
import { CreateGvecFinCycleDto } from './create-gvecFinCycle.dto';

export class UpdateGvecFinCycleDto extends PartialType(CreateGvecFinCycleDto) {}
