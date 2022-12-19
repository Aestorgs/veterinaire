import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from 'src/entities/pets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private readonly pets: Repository<Pets>,
  ) {}

  //j'affiche les animaux et les types et utilisateur 
  findAll() {
    return this.pets.find({
      relations: {
        Type: true,
        clients: true,
      },
    });
  }
}
