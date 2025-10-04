import { Test, TestingModule } from '@nestjs/testing';
import { SpeculationController } from './speculation.controller';
import { SpeculationService } from './speculation.service';

describe('SpeculationController', () => {
  let controller: SpeculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeculationController],
      providers: [SpeculationService],
    }).compile();

    controller = module.get<SpeculationController>(SpeculationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
