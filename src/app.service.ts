import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { resolve } from 'path';
import { Sequelize } from 'sequelize-typescript';
import { client_info } from './schemas/client.model';
import { ClientService } from './services/client/client.service';
const PDFDocument=require('pdfkit-table');

@Injectable()
export class AppService {

  public data;
  

  constructor(private sequelize: Sequelize, @InjectModel(client_info)
  private clientModel: typeof client_info,) {}

  async getHello() {
    this.data=await this.clientModel.findAll();
    return this.data;
  }

  async generatePDF():Promise<Buffer>{

    let clientData=this.clientModel.findAll();

      const pdfBuffer:Buffer= await new Promise(resolve => {
        const doc= new PDFDocument({
          size:'LETTER',
          bufferPages:true
        })

     

        //Content
        doc.text("Pdf downloaded successfully");
        doc.moveDown();
        doc.text(this.data);

        const tableArray = {
          headers: ["country", "Conversion rate", "Trend"],
          rows: [
            ["Switzerland", "12%", "+1.12%"],
            ["France", "67%", "-0.98%"],
            ["England", "33%", "+4.44%"],
          ],
        };
        doc.table( tableArray, { width: 300, }); // A4 595.28 x 841.89 (portrait) (about width sizes)


        const buffer=[];
        doc.on('data',buffer.push.bind(buffer));
        doc.on('end',()=>{
          const data=Buffer.concat(buffer)
          resolve(data)
        });
        doc.end();
      })

      return pdfBuffer;
  }
}
