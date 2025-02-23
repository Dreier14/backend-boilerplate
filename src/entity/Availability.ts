import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Employee } from "./Employee";

@ObjectType()
@Entity()
export class Availability {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ nullable: true })
  @Field()
  slotTime: string;

  @Column('timestamp', { nullable: true })
  @Field()
  date: Date;

  @ManyToOne(() => Employee, (employee) => employee.availabilities)
  @Field(() => Employee)
  employee: Employee;
}
