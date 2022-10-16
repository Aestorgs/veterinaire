import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pets } from 'src/entities/pets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private readonly pets: Repository<Pets>,
  ) {}

  findAll() {
    return this.pets.find({
      relations: { Type: true },
    });
  }
}
