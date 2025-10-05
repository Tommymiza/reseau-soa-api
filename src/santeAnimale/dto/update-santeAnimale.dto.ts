import { PartialType } from '@nestjs/swagger';
import { CreateSanteAnimaleDto } from './create-santeAnimale.dto';

export class UpdateSanteAnimaleDto extends PartialType(CreateSanteAnimaleDto) {}
