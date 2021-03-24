import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Loaiphim } from "./Loaiphim";
import { Phim } from "./Phim";

@Index("phim_loaiphim_pkey", ["idLoai", "idPhim"], { unique: true })
@Entity("phim_loaiphim", { schema: "public" })
export class PhimLoaiphim {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID_Phim" })
  idPhim: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "ID_Loai" })
  idLoai: number;

  @Column("character", { name: "MoTa", nullable: true, length: 900 })
  moTa: string | null;

  @Column("date", { name: "NgayKhoiChieu", nullable: true })
  ngayKhoiChieu: string | null;

  @ManyToOne(() => Loaiphim, (loaiphim) => loaiphim.phimLoaiphims)
  @JoinColumn([{ name: "ID_Loai", referencedColumnName: "id" }])
  idLoai2: Loaiphim;

  @ManyToOne(() => Phim, (phim) => phim.phimLoaiphims)
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim2: Phim;
}
