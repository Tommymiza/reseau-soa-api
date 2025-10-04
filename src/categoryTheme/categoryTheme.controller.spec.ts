import { Test, TestingModule } from '@nestjs/testing';
import { CategoryThemeController } from './categoryTheme.controller';
import { CategoryThemeService } from './categoryTheme.service';

describe('CategoryThemeController', () => {
  let controller: CategoryThemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryThemeController],
      providers: [CategoryThemeService],
    }).compile();

    controller = module.get<CategoryThemeController>(CategoryThemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
