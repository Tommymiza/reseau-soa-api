import { PartialType } from '@nestjs/swagger';
import { CreateRepresentationProdDto } from './create-representationProd.dto';

export class UpdateRepresentationProdDto extends PartialType(
  CreateRepresentationProdDto,
) {}
