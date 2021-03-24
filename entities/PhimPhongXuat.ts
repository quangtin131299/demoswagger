import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Phim } from "./Phim";
import { Phong } from "./Phong";
import { Suatchieu } from "./Suatchieu";

@Index("phim_phong_xuat_pkey", ["idPhim", "idPhong", "idXuatChieu", "ngay"], {
  unique: true,
})
@Entity("phim_phong_xuat", { schema: "public" })
export class PhimPhongXuat {
  @Column("integer", { primary: true, name: "ID_Phim" })
  idPhim: number;

  @Column("integer", { primary: true, name: "ID_Phong" })
  idPhong: number;

  @Column("integer", { primary: true, name: "ID_XuatChieu" })
  idXuatChieu: number;

  @Column("date", { primary: true, name: "Ngay" })
  ngay: string;

  @ManyToOne(() => Phim, (phim) => phim.phimPhongXuats)
  @JoinColumn([{ name: "ID_Phim", referencedColumnName: "id" }])
  idPhim2: Phim;

  @ManyToOne(() => Phong, (phong) => phong.phimPhongXuats)
  @JoinColumn([{ name: "ID_Phong", referencedColumnName: "id" }])
  idPhong2: Phong;

  @ManyToOne(() => Suatchieu, (suatchieu) => suatchieu.phimPhongXuats)
  @JoinColumn([{ name: "ID_XuatChieu", referencedColumnName: "id" }])
  idXuatChieu2: Suatchieu;
}
