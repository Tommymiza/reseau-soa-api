import { Test, TestingModule } from '@nestjs/testing';
import { GvecRealisationService } from './gvecRealisation.service';

describe('GvecRealisationService', () => {
  let service: GvecRealisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GvecRealisationService],
    }).compile();

    service = module.get<GvecRealisationService>(GvecRealisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
