import { Clients } from './clients.entity';
import { Utilisateur } from './user.entity';
import { Types } from './type.entity';
import { Pets } from './pets.entity';

// il affiche les tables dans postgres 
const entities = [Clients, Utilisateur, Types, Pets];
export default entities;
