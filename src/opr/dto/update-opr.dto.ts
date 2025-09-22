import { PartialType } from '@nestjs/swagger';
import { CreateOprDto } from './create-opr.dto';

export class UpdateOprDto extends PartialType(CreateOprDto) {}
