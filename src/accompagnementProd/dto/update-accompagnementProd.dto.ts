import { PartialType } from '@nestjs/swagger';
import { CreateAccompagnementProdDto } from './create-accompagnementProd.dto';

export class UpdateAccompagnementProdDto extends PartialType(
  CreateAccompagnementProdDto,
) {}
