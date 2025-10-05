import { Test, TestingModule } from '@nestjs/testing';
import { GvecCycleService } from './gvecCycle.service';

describe('GvecCycleService', () => {
  let service: GvecCycleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GvecCycleService],
    }).compile();

    service = module.get<GvecCycleService>(GvecCycleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
