import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Appointment } from "./Appointment";
import { Availability } from "./Availability";

@ObjectType()
@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @OneToMany(() => Appointment, (appointment) => appointment.employee)
  @Field(() => [Appointment])
  appointments: Appointment[];

  @OneToMany(() => Availability, (availability) => availability.employee)
  @Field(() => [Availability])
  availabilities: Availability[];
}
