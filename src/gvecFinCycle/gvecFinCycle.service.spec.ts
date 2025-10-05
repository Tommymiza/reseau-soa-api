import { Test, TestingModule } from '@nestjs/testing';
import { GvecFinCycleService } from './gvecFinCycle.service';

describe('GvecFinCycleService', () => {
  let service: GvecFinCycleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GvecFinCycleService],
    }).compile();

    service = module.get<GvecFinCycleService>(GvecFinCycleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
