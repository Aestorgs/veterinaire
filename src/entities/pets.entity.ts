import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clients } from './clients.entity';
import { Types } from './type.entity';

@Entity('pets')
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: string;

  @ManyToOne(() => Types, (pets) => pets.Pets)
  Type: Types;

  @ManyToOne(() => Clients, (client) => client.Pets)
  clients: Clients;
}
