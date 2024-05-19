import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false, type:"text"})
    name: string

    @Column()
    mark: number

    @Column()
    class: string

    //@OneToOne

}