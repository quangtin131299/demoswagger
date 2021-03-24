import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hoadon } from "./Hoadon";
import { Vedat } from "./Vedat";

@Index("khachhang_pkey", ["id"], { unique: true })
@Entity("khachhang", { schema: "public" })
export class Khachhang {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "HoTen", nullable: true, length: 100 })
  hoTen: string | null;

  @Column("character", { name: "Email", nullable: true, length: 100 })
  email: string | null;

  @Column("date", { name: "NgaySinh", nullable: true })
  ngaySinh: string | null;

  @Column("character", { name: "SDT", nullable: true, length: 20 })
  sdt: string | null;

  @Column("character", { name: "Account", nullable: true, length: 100 })
  account: string | null;

  @Column("character", { name: "Password", nullable: true, length: 100 })
  password: string | null;

  @OneToMany(() => Hoadon, (hoadon) => hoadon.idKhachHang)
  hoadons: Hoadon[];

  @OneToMany(() => Vedat, (vedat) => vedat.idKhachHang)
  vedats: Vedat[];
}
