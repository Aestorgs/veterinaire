import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get(':id')
  getClient(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.findById(id);
  }
}
