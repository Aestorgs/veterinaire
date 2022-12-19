import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pets } from './pets.entity';

// je crée la table et crée les colonne 
@Entity('types')
export class Types {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Pets, (pets) => pets.Type)
  Pets: Pets;
}
