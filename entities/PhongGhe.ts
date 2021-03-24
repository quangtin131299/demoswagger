import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ghe } from "./Ghe";
import { Phong } from "./Phong";

@Index("phong_ghe_pkey", ["ngay", "gheId", "phongId"], { unique: true })
@Entity("phong_ghe", { schema: "public" })
export class PhongGhe {
  @PrimaryGeneratedColumn({ type: "integer", name: "phong_ID" })
  phongId: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "ghe_ID" })
  gheId: number;

  @Column("date", { primary: true, name: "Ngay" })
  ngay: string;

  @ManyToOne(() => Ghe, (ghe) => ghe.phongGhes)
  @JoinColumn([{ name: "ghe_ID", referencedColumnName: "id" }])
  ghe: Ghe;

  @ManyToOne(() => Phong, (phong) => phong.phongGhes)
  @JoinColumn([{ name: "phong_ID", referencedColumnName: "id" }])
  phong: Phong;
}
