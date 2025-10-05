import { Test, TestingModule } from '@nestjs/testing';
import { SanteAnimaleService } from './santeAnimale.service';

describe('SanteAnimaleService', () => {
  let service: SanteAnimaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanteAnimaleService],
    }).compile();

    service = module.get<SanteAnimaleService>(SanteAnimaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
