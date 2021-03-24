import { Test, TestingModule } from '@nestjs/testing';
import { PhimService } from './phim.service';

describe('PhimService', () => {
  let service: PhimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhimService],
    }).compile();

    service = module.get<PhimService>(PhimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
