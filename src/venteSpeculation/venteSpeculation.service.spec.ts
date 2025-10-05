import { Test, TestingModule } from '@nestjs/testing';
import { VenteSpeculationService } from './venteSpeculation.service';

describe('VenteSpeculationService', () => {
  let service: VenteSpeculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenteSpeculationService],
    }).compile();

    service = module.get<VenteSpeculationService>(VenteSpeculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
