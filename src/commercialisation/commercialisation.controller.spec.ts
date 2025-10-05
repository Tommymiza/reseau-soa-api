import { Test, TestingModule } from '@nestjs/testing';
import { CommercialisationController } from './commercialisation.controller';
import { CommercialisationService } from './commercialisation.service';

describe('CommercialisationController', () => {
  let controller: CommercialisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommercialisationController],
      providers: [CommercialisationService],
    }).compile();

    controller = module.get<CommercialisationController>(
      CommercialisationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
