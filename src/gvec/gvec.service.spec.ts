import { Test, TestingModule } from '@nestjs/testing';
import { GvecService } from './gvec.service';

describe('GvecService', () => {
  let service: GvecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GvecService],
    }).compile();

    service = module.get<GvecService>(GvecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
