import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class client_info extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;
}