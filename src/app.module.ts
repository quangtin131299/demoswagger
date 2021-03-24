import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhimModule } from './phim/phim.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phim } from 'entities/Phim';
import { Ghe } from 'entities/Ghe';
import { Lichchieu } from 'entities/Lichchieu';
import { PhimLoaiphim } from 'entities/PhimLoaiphim';
import { PhimPhongXuat } from 'entities/PhimPhongXuat';
import { Vedat } from 'entities/Vedat';
import { Hoadon } from 'entities/Hoadon';
import { Khachhang } from 'entities/Khachhang';
import { Loaiphim } from 'entities/Loaiphim';
import { Phong } from 'entities/Phong';
import { PhongGhe } from 'entities/PhongGhe';
import { Rapphim } from 'entities/Rapphim';
import { Suatchieu } from 'entities/Suatchieu';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      username: 'postgres',
      password:'p@ssW0rd',
      database:'datvephim2',
      entities:[
        Phim, 
        Lichchieu,
        PhimLoaiphim,
        PhimPhongXuat,
        Vedat,
        Ghe,
        Hoadon,
        Khachhang,
        Loaiphim,
        Phong,
        PhongGhe,
        Rapphim,
        Suatchieu,
      ],
      synchronize:false
    }),
    PhimModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
