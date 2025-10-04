import { PartialType } from '@nestjs/swagger';
import { CreateAccompagnementOprDto } from './create-accompagnement.dto';

export class UpdateAccompagnementOprDto extends PartialType(
  CreateAccompagnementOprDto,
) {}
