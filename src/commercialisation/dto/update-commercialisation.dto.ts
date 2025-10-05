import { PartialType } from '@nestjs/swagger';
import { CreateCommercialisationDto } from './create-commercialisation.dto';

export class UpdateCommercialisationDto extends PartialType(
  CreateCommercialisationDto,
) {}
