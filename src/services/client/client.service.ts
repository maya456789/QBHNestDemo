import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs';
import { client_info } from 'src/schemas/client.model';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(client_info)
        private clientModel: typeof client_info,
      ) {}

     async getAllClient(){
        return this.clientModel.findAll();
      }

      async addToClientInfo(record){
        return await this.clientModel.create({name:record.name,email:record.email,phone:record.phone})
      }

      async deleteClient(cid){

        return await this.clientModel.destroy({
            where:{
                id:cid, 
                 }
            })
      }
    
}
