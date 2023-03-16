import { Controller, Get, Res } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 

  @Get()
  getHello(): string {
    return ""; //this.appService.getHello();
  }

  @Get('generate-pdf/download')
async generateFile(@Res() res):Promise<void> {

  const buffer= await this.appService.generatePDF();

  res.set({
    'Content-Type':'application/pdf',
    'Content-Disposition':'attachment; filename=example.pdf',
    'Content-Length':buffer.length,
  })

  res.end(buffer);
 }


}
