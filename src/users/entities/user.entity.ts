
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('curso')

export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    descripcion: string;


}
