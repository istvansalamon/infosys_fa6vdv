import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    usertName: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({ nullable: true })
    email: string

}
