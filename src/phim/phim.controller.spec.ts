import { Test, TestingModule } from '@nestjs/testing';
import { PhimController } from './phim.controller';

describe('PhimController', () => {
  let controller: PhimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhimController],
    }).compile();

    controller = module.get<PhimController>(PhimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
