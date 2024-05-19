import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"

@Entity()
export class Subject {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false, type:"text"})
    name: string

    @Column()
    credit: number

    @Column()
    type: string

    //@OneToOne

}