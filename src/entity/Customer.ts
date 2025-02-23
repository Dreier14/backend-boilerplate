import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Appointment } from "./Appointment";

@ObjectType()
@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  phoneNumber: string;

  @OneToMany(() => Appointment, (appointment) => appointment.customer)
  @Field(() => [Appointment])
  appointments: Appointment[];
}
