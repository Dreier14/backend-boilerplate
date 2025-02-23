import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, GraphQLISODateTime } from "type-graphql";
import { Employee } from "./Employee";
import { Customer } from "./Customer";

@ObjectType()
@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  appointmentTime: string;

  @Column('timestamp')
  @Field(() => GraphQLISODateTime)
  appointmentDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.appointments)
  @JoinColumn({ name: 'employeeId' })
  @Field(() => Employee)
  employee: Employee;

  @ManyToOne(() => Customer, (customer) => customer.appointments)
  @JoinColumn({ name: 'customerId' })
  @Field(() => Customer)
  customer: Customer;
}
