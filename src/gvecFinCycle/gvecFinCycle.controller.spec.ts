import { Test, TestingModule } from '@nestjs/testing';
import { GvecFinCycleController } from './gvecFinCycle.controller';
import { GvecFinCycleService } from './gvecFinCycle.service';

describe('GvecFinCycleController', () => {
  let controller: GvecFinCycleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GvecFinCycleController],
      providers: [GvecFinCycleService],
    }).compile();

    controller = module.get<GvecFinCycleController>(GvecFinCycleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
