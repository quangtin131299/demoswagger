import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ghe } from "./Ghe";
import { Hoadon } from "./Hoadon";
import { Khachhang } from "./Khachhang";
import { Phim } from "./Phim";
import { Phong } from "./Phong";
import { Rapphim } from "./Rapphim";
import { Suatchieu } from "./Suatchieu";

@Index("vedat_pkey", ["id"], { unique: true })
@Entity("vedat", { schema: "public" })
export class Vedat {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("date", { name: "NgayDat", nullable: true })
  ngayDat: string | null;

  @Column("character", { name: "Status", nullable: true, length: 50 })
  status: string | null;

  @ManyToOne(() => Ghe, (ghe) => ghe.vedats)
  @JoinColumn([{ name: "ID_Ghe", referencedColumnName: "id" }])
  idGhe: Ghe;

  @ManyToOne(() => Hoadon, (hoadon) => hoadon.vedats)
  @JoinColumn([{ name: "ID_HoaDon", referencedColumnName: "id" }])
  idHoaDon: Hoadon;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.vedats)
  @JoinColumn([{ name: "ID_KhachHang", referencedColumnName: "id" }])
  idKhachHang: Khachhang;

  @ManyToOne(() => Phim, (phim) => phim.vedats)
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim: Phim;

  @ManyToOne(() => Phong, (phong) => phong.vedats)
  @JoinColumn([{ name: "ID_Phong", referencedColumnName: "id" }])
  idPhong: Phong;

  @ManyToOne(() => Rapphim, (rapphim) => rapphim.vedats)
  @JoinColumn([{ name: "ID_Rap", referencedColumnName: "id" }])
  idRap: Rapphim;

  @ManyToOne(() => Suatchieu, (suatchieu) => suatchieu.vedats)
  @JoinColumn([{ name: "ID_Suat", referencedColumnName: "id" }])
  idSuat: Suatchieu;
}
