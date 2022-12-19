import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clients } from './clients.entity';

// je crée la table et crée les colonnes 
@Entity('utilisateur')
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Clients, (client) => client.utilisateurs)
  clients: Clients;
}
