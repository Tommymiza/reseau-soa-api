import { PartialType } from '@nestjs/swagger';
import { CreateGvecDto } from './create-gvec.dto';

export class UpdateGvecDto extends PartialType(CreateGvecDto) {}
