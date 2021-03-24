import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Khachhang } from "./Khachhang";
import { Vedat } from "./Vedat";

@Index("hoadon_pkey", ["id"], { unique: true })
@Entity("hoadon", { schema: "public" })
export class Hoadon {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("date", { name: "Ngay", nullable: true })
  ngay: string | null;

  @Column("integer", { name: "ThanhTien", nullable: true })
  thanhTien: number | null;

  @Column("character", { name: "TrangThai", nullable: true, length: 50 })
  trangThai: string | null;

  @ManyToOne(() => Khachhang, (khachhang) => khachhang.hoadons)
  @JoinColumn([{ name: "ID_KhachHang", referencedColumnName: "id" }])
  idKhachHang: Khachhang;

  @OneToMany(() => Vedat, (vedat) => vedat.idHoaDon)
  vedats: Vedat[];
}
