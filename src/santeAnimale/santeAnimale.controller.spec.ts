import { Test, TestingModule } from '@nestjs/testing';
import { SanteAnimaleController } from './santeAnimale.controller';
import { SanteAnimaleService } from './santeAnimale.service';

describe('SanteAnimaleController', () => {
  let controller: SanteAnimaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SanteAnimaleController],
      providers: [SanteAnimaleService],
    }).compile();

    controller = module.get<SanteAnimaleController>(SanteAnimaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
