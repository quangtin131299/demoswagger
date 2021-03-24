import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { Phim } from 'entities/Phim';
import { PhimService } from './phim.service';

@Controller('phim')
export class PhimController {
  constructor(private phimService: PhimService) {}

  @Get()
  @ApiCreatedResponse({description: 'Lấy toàn bộ thông tin phim', type: Phim})
  @ApiOkResponse({type: Phim})
  findAll(): Promise<Phim[]> {
    return this.phimService.findAll();
  }
}
