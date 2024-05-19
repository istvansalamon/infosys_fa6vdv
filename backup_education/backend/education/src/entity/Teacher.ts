import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"

@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false, type:"text"})
    name: string

    @Column()
    department: number

    @Column()
    subject: string

    //@OneToOne

}
