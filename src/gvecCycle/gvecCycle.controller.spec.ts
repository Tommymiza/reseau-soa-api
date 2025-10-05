import { Test, TestingModule } from '@nestjs/testing';
import { GvecCycleController } from './gvecCycle.controller';
import { GvecCycleService } from './gvecCycle.service';

describe('GvecCycleController', () => {
  let controller: GvecCycleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GvecCycleController],
      providers: [GvecCycleService],
    }).compile();

    controller = module.get<GvecCycleController>(GvecCycleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
