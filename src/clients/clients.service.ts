import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Clients } from 'src/entities/clients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients) private readonly client: Repository<Clients>,
  ) {}
  
  // j'affiche utilisateur et les animaux 

  findById(id: number) {
    return this.client.find({
      relations: {
        utilisateurs: true,
        Pets: true,
      },
      where: { id },
    });
  }
}
