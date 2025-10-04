import { Test, TestingModule } from '@nestjs/testing';
import { CategoryThemeService } from './categoryTheme.service';

describe('CategoryThemeService', () => {
  let service: CategoryThemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryThemeService],
    }).compile();

    service = module.get<CategoryThemeService>(CategoryThemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
