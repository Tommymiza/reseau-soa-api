import { PartialType } from '@nestjs/swagger';
import { CreateJeuneDto } from './create-jeune.dto';

export class UpdateJeuneDto extends PartialType(CreateJeuneDto) {}
