import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  uid!: string;


  @Column("varchar", {
    length: 100,
  })
  full_name!: string;

  @Column("varchar", {
    length: 130,
    unique: true,
  })
  email!: string;

  @Column("varchar", {
    length: 50,
    unique: true,
  })
  document!: string;

  @Column("varchar", {
    length: 255,
    unique: true,
  })
  password!: string;

  @CreateDateColumn({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "time without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at!: Date;
}
