import { Test, TestingModule } from '@nestjs/testing';
import { AchatArticleService } from './achatArticle.service';

describe('AchatArticleService', () => {
  let service: AchatArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchatArticleService],
    }).compile();

    service = module.get<AchatArticleService>(AchatArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
