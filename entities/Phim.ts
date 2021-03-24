import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lichchieu } from "./Lichchieu";
import { PhimLoaiphim } from "./PhimLoaiphim";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { Vedat } from "./Vedat";

@Index("phim_pkey", ["id"], { unique: true })
@Entity("phim", { schema: "public" })
export class Phim {

  @ApiProperty({type: Number , description: 'id'})
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @ApiProperty({type: String , description: 'tenPhim'})
  @Column("character", { name: "TenPhim", nullable: true, length: 100 })
  tenPhim: string | null;

  @ApiProperty({type: String , description: 'hinh'})
  @Column("character", { name: "Hinh", nullable: true, length: 100 })
  hinh: string | null;

  @ApiProperty({type: String , description: 'trangthai'})
  @Column("character", { name: "TrangThai", nullable: true, length: 50 })
  trangThai: string | null;

  @ApiProperty({type: Number , description: 'thoigian'})
  @Column("integer", { name: "ThoiGian", nullable: true })
  thoiGian: number | null;

  @ApiProperty({type: String , description: 'trailer'})
  @Column("character", { name: "Trailer", nullable: true, length: 20 })
  trailer: string | null;

  @ManyToMany(() => Lichchieu, (lichchieu) => lichchieu.phims)
  lichchieus: Lichchieu[];

  @ApiProperty({example:['PhimLoaiphim']})
  @OneToMany(() => PhimLoaiphim, (phimLoaiphim) => phimLoaiphim.idPhim2)
  phimLoaiphims: PhimLoaiphim[];

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idPhim2)
  phimPhongXuats: PhimPhongXuat[];

  @OneToMany(() => Vedat, (vedat) => vedat.idPhim)
  vedats: Vedat[];
}
