import { Controller, Get } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  //je crée la route et j'afficche les animaux les types et utilisateur 
  @Get()
  findAll() {
    return this.petsService.findAll();
  }
}
