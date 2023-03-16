import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientController } from 'src/client/client.controller';
import { client_info } from 'src/schemas/client.model';
import { ClientService } from 'src/services/client/client.service';

@Module({
  imports: [SequelizeModule.forFeature([client_info])],
  providers: [ClientService],
  controllers: [ClientController],
  exports: [SequelizeModule]
})
export class ClientModule {}
