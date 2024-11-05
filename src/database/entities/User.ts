import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  uid!: string;

  @Column("varchar", {
    lenght: 100,
  })
  full_name!: string;

  @Column("varchar", {
    lenght: 130,
    unique: true,
  })
  email!: string;

  @Column("varchar", {
    lenght: 50,
    unique: true,
  })
  document!: string;

  @Column("varchar", {
    lenght: 255,
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
