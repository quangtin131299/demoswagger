import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loaiphim } from 'entities/Loaiphim';
import { Phim } from 'entities/Phim';
import { PhimController } from './phim.controller';
import { PhimService } from './phim.service';

@Module({
    imports:[TypeOrmModule.forFeature([Phim, Loaiphim])],//Dăng ký một kho chứa dữ liệu
    controllers: [PhimController],
    providers: [PhimService]

})
export class PhimModule {}
