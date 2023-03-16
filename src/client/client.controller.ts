import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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

    @Get()
    client_info():string{
         return "Client controller !";
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

    // @Get('list/:id')
    // @HttpCode(204)
    // getId(@Param() lid:any){
    //     return "Id is :"+lid.id;
    // }
}
