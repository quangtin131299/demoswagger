import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { PhongGhe } from "./PhongGhe";
import { Lichchieu } from "./Lichchieu";
import { Rapphim } from "./Rapphim";
import { Vedat } from "./Vedat";

@Index("phong_pkey", ["id"], { unique: true })
@Entity("phong", { schema: "public" })
export class Phong {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "TenPhong", nullable: true, length: 50 })
  tenPhong: string | null;

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idPhong2)
  phimPhongXuats: PhimPhongXuat[];

  @OneToMany(() => PhongGhe, (phongGhe) => phongGhe.phong)
  phongGhes: PhongGhe[];

  @ManyToMany(() => Lichchieu, (lichchieu) => lichchieu.phongs)
  lichchieus: Lichchieu[];

  @ManyToMany(() => Rapphim, (rapphim) => rapphim.phongs)
  @JoinTable({
    name: "phong_rapphim",
    joinColumns: [{ name: "ID_Phong", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_Rap", referencedColumnName: "id" }],
    schema: "public",
  })
  rapphims: Rapphim[];

  @OneToMany(() => Vedat, (vedat) => vedat.idPhong)
  vedats: Vedat[];
}
