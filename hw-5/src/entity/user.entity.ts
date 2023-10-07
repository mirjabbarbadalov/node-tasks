import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsPosts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
