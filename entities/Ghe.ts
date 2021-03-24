import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhongGhe } from "./PhongGhe";
import { Vedat } from "./Vedat";

@Index("ghe_pkey", ["id"], { unique: true })
@Entity("ghe", { schema: "public" })
export class Ghe {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "TenGhe", nullable: true, length: 50 })
  tenGhe: string | null;

  @OneToMany(() => PhongGhe, (phongGhe) => phongGhe.ghe)
  phongGhes: PhongGhe[];

  @OneToMany(() => Vedat, (vedat) => vedat.idGhe)
  vedats: Vedat[];
}
