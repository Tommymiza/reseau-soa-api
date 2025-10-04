import { Module } from '@nestjs/common';
import { CategoryThemeController } from './categoryTheme.controller';
import { CategoryThemeService } from './categoryTheme.service';

@Module({
  controllers: [CategoryThemeController],
  providers: [CategoryThemeService],
})
export class CategoryThemeModule {}
