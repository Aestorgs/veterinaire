import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clients } from './clients.entity';
import { Types } from './type.entity';

// je crée la table et crée les colonne 
@Entity('pets')
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: string;

  @ManyToOne(() => Types, (type) => type.Pets)
  Type: Types;

  @ManyToOne(() => Clients, (client) => client.Pets)
  clients: Clients;
}
