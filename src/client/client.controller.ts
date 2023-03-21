import { Body, Controller, Get, HttpCode, Param, Post,Delete  } from '@nestjs/common';
import { ClientService } from 'src/services/client/client.service';

@Controller('client_info')
export class ClientController {

     
    constructor(private clientServic:ClientService){}

    @Get()
    async findAllClient(){
       
        let dt=await this.clientServic.getAllClient();
          console.log(dt);
        return this.clientServic.getAllClient();
       
    }

    @Get('edit_client/:id')
    client_info(@Param() lid:any){
         console.log("Edit id is:",lid);
         return this.clientServic.getSingleClient(lid.id);
    }

    // @Get('obj')
    // client_obj():object{
    //     return {'id':1010,'name':'Obj1'};
    // }

    @Post('addClient')
    @HttpCode(201)
    add_post(@Body() record:any){
        console.log("Records are :->",record);
        return this.clientServic.addToClientInfo(record);
    }

    @Delete('deleteClient/:id')
    @HttpCode(204) 
    getId(@Param() lid:any){
        return this.clientServic.deleteClient(lid.id);
    }

    @Post('editedClient')
    @HttpCode(201)
    edit_post(@Body() record:any){
        console.log(" Edited Records are :->",record);
        return this.clientServic.updateClientInfo(record);
      // return "Updated successfully";
    }

}
