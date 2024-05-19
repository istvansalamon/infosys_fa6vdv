import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false, type:"text"})
    type: string

    @Column()
    limit: number

    @Column()
    teacher: string

    //@OneToOne

}


