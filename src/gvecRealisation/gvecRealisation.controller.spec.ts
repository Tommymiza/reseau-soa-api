import { Test, TestingModule } from '@nestjs/testing';
import { GvecRealisationController } from './gvecRealisation.controller';
import { GvecRealisationService } from './gvecRealisation.service';

describe('GvecRealisationController', () => {
  let controller: GvecRealisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GvecRealisationController],
      providers: [GvecRealisationService],
    }).compile();

    controller = module.get<GvecRealisationController>(
      GvecRealisationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
