import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PhimLoaiphim } from "./PhimLoaiphim";

@Index("loaiphim_pkey", ["id"], { unique: true })
@Entity("loaiphim", { schema: "public" })
export class Loaiphim {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "TenLoai", nullable: true, length: 100 })
  tenLoai: string | null;

  @OneToMany(() => PhimLoaiphim, (phimLoaiphim) => phimLoaiphim.idLoai2)
  phimLoaiphims: PhimLoaiphim[];
}
