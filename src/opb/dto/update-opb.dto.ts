import { PartialType } from '@nestjs/swagger';
import { CreateOpbDto } from './create-opb.dto';

export class UpdateOpbDto extends PartialType(CreateOpbDto) {}
