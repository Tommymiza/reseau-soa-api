import { PartialType } from '@nestjs/swagger';
import { CreateGvecRealisationDto } from './create-gvecRealisation.dto';

export class UpdateGvecRealisationDto extends PartialType(
  CreateGvecRealisationDto,
) {}
