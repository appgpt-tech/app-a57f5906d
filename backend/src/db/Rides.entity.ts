//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Rides')
export class RidesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  destination: string;

  @Column('date', { nullable: true })
  date: Date;

  @Column('date', { nullable: true })
  time: Date;

  @Column('text', { nullable: true })
  carType: string;

  @Column('real', { nullable: true })
  driverRating: number;

  @Column('real', { nullable: true })
  estimatedFare: number;
}
