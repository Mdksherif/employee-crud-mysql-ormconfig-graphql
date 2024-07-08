import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class employee {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    profession!: string;

    @Column("simple-array")
    projects!: string[];

    @Column("decimal")
    salary!: number;

    @Column()
    status!: string;
}
