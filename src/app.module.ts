import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientController } from './client/client.controller';
import { ClientModule } from './modules/client/client.module';
import { client_info } from './schemas/client.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'client',
      models: [client_info],
      autoLoadModels: true,
      synchronize: true,
    }),
    ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
