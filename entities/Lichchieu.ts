import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rapphim } from "./Rapphim";
import { Phim } from "./Phim";
import { Phong } from "./Phong";
import { Suatchieu } from "./Suatchieu";

@Index("lichchieu_pkey", ["id"], { unique: true })
@Entity("lichchieu", { schema: "public" })
export class Lichchieu {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("date", { name: "Ngay", nullable: true })
  ngay: string | null;

  @ManyToOne(() => Rapphim, (rapphim) => rapphim.lichchieus)
  @JoinColumn([{ name: "ID_Rap", referencedColumnName: "id" }])
  idRap: Rapphim;

  @ManyToMany(() => Phim, (phim) => phim.lichchieus)
  @JoinTable({
    name: "phim_lichchieu",
    joinColumns: [{ name: "ID_LichChieu", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_Phim", referencedColumnName: "id" }],
    schema: "public",
  })
  phims: Phim[];

  @ManyToMany(() => Phong, (phong) => phong.lichchieus)
  @JoinTable({
    name: "phong_lichchieu",
    joinColumns: [{ name: "ID_LichChieu", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "ID_phong", referencedColumnName: "id" }],
    schema: "public",
  })
  phongs: Phong[];

  @OneToMany(() => Suatchieu, (suatchieu) => suatchieu.idLichchieu)
  suatchieus: Suatchieu[];
}
