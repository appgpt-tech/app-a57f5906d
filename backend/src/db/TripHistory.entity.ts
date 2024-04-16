//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TripHistory')
export class TripHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  tripId: number;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('date', { nullable: true })
  tripDate: Date;

  @Column('text', { nullable: true })
  destination: string;

  @Column('text', { nullable: true })
  status: string;
}