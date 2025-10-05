import { Test, TestingModule } from '@nestjs/testing';
import { CommercialisationService } from './commercialisation.service';

describe('CommercialisationService', () => {
  let service: CommercialisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommercialisationService],
    }).compile();

    service = module.get<CommercialisationService>(CommercialisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
