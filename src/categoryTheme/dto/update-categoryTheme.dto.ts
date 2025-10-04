import { PartialType } from '@nestjs/swagger';
import { CreateCategoryThemeDto } from './create-categoryTheme.dto';

export class UpdateCategoryThemeDto extends PartialType(
  CreateCategoryThemeDto,
) {}
