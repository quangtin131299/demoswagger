import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { PhimPhongXuat } from "./PhimPhongXuat";
import { Lichchieu } from "./Lichchieu";
import { Vedat } from "./Vedat";

@Index("suatchieu_pkey", ["id"], { unique: true })
@Entity("suatchieu", { schema: "public" })
export class Suatchieu {
  @Column("integer", { primary: true, name: "ID" })
  id: number;

  @Column("time with time zone", { name: "Gio", nullable: true })
  gio: string | null;

  @OneToMany(() => PhimPhongXuat, (phimPhongXuat) => phimPhongXuat.idXuatChieu2)
  phimPhongXuats: PhimPhongXuat[];

  @ManyToOne(() => Lichchieu, (lichchieu) => lichchieu.suatchieus)
  @JoinColumn([{ name: "ID_Lichchieu", referencedColumnName: "id" }])
  idLichchieu: Lichchieu;

  @OneToMany(() => Vedat, (vedat) => vedat.idSuat)
  vedats: Vedat[];
}
