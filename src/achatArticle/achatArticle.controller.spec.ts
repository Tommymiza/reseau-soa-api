import { Test, TestingModule } from '@nestjs/testing';
import { AchatArticleController } from './achatArticle.controller';
import { AchatArticleService } from './achatArticle.service';

describe('AchatArticleController', () => {
  let controller: AchatArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchatArticleController],
      providers: [AchatArticleService],
    }).compile();

    controller = module.get<AchatArticleController>(AchatArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
