import { PartialType } from '@nestjs/swagger';
import { CreateRepresentationDto } from './create-representation.dto';

export class UpdateRepresentationDto extends PartialType(
  CreateRepresentationDto,
) {}
