import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loaiphim } from 'entities/Loaiphim';
import { Phim } from 'entities/Phim';
import { Repository } from 'typeorm';

@Injectable()
export class PhimService {


    constructor(@InjectRepository(Phim) private phimRepo: Repository<Phim>, @InjectRepository(Loaiphim) private loaiRepo: Repository<Loaiphim>){}


    
    async findAll(): Promise<Phim[]>{
        return await this.phimRepo.createQueryBuilder('phim').innerJoinAndSelect('phim.phimLoaiphims','phimLoaiphim').getMany();
    }


    





}
