import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pets } from './pets.entity';
import { Utilisateur } from './user.entity';

// il crée la table et crée les colonne 
@Entity('clients')
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  firstname: string;

  @Column({ nullable: false, default: '' })
  lastname: string;

  @Column({ nullable: false, default: '' })
  address: string;

  @Column({ nullable: false, default: '' })
  city: string;

  @Column({ nullable: false, default: '' })
  telephone: string;

  @OneToMany(() => Utilisateur, (utilisateur) => utilisateur.clients)
  utilisateurs: Utilisateur;

  @OneToMany(() => Pets, (pets) => pets.clients)
  Pets: Pets;
}
