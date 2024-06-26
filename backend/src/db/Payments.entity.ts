//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  transactionId: string;

  @Column('real', { nullable: true })
  amount: number;

  @Column('text', { nullable: true })
  paymentMethods: string;

  @Column('integer', { nullable: true })
  payerIds: number;

  @Column('text', { nullable: true })
  paymentStatus: string;
}
