import { Test, TestingModule } from '@nestjs/testing';
import { VenteSpeculationController } from './venteSpeculation.controller';
import { VenteSpeculationService } from './venteSpeculation.service';

describe('VenteSpeculationController', () => {
  let controller: VenteSpeculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenteSpeculationController],
      providers: [VenteSpeculationService],
    }).compile();

    controller = module.get<VenteSpeculationController>(
      VenteSpeculationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
