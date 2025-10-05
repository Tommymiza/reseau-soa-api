import { Test, TestingModule } from '@nestjs/testing';
import { GvecController } from './gvec.controller';
import { GvecService } from './gvec.service';

describe('GvecController', () => {
  let controller: GvecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GvecController],
      providers: [GvecService],
    }).compile();

    controller = module.get<GvecController>(GvecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
