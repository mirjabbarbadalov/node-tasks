import { Author } from "./../dto/newsposts.dto";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsPosts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column("varchar", { nullable: true })
  author: Author;
}
