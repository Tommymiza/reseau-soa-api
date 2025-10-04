import { Test, TestingModule } from '@nestjs/testing';
import { AccompagnementOprController } from './accompagnement.controller';
import { AccompagnementOprService } from './accompagnement.service';

describe('AccompagnementOprController', () => {
  let controller: AccompagnementOprController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccompagnementOprController],
      providers: [AccompagnementOprService],
    }).compile();

    controller = module.get<AccompagnementOprController>(
      AccompagnementOprController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
