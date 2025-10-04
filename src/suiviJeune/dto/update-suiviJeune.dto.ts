import { PartialType } from '@nestjs/swagger';
import { CreateSuiviJeuneDto } from './create-suiviJeune.dto';

export class UpdateSuiviJeuneDto extends PartialType(CreateSuiviJeuneDto) {}
