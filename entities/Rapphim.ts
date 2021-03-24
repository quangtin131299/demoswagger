import {
  Column,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lichchieu } from "./Lichchieu";
import { Phong } from "./Phong";
import { Vedat } from "./Vedat";

@Index("rapphim_pkey", ["id"], { unique: true })
@Entity("rapphim", { schema: "public" })
export class Rapphim {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "TenRap", nullable: true, length: 100 })
  tenRap: string | null;

  @Column("character", { name: "Hinh", nullable: true, length: 100 })
  hinh: string | null;

  @Column("character", { name: "DiaChi", nullable: true, length: 200 })
  diaChi: string | null;

  @OneToMany(() => Lichchieu, (lichchieu) => lichchieu.idRap)
  lichchieus: Lichchieu[];

  @ManyToMany(() => Phong, (phong) => phong.rapphims)
  phongs: Phong[];

  @OneToMany(() => Vedat, (vedat) => vedat.idRap)
  vedats: Vedat[];
}
