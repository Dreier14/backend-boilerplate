import { Resolver, Query, Mutation, Arg, GraphQLISODateTime } from "type-graphql";
import { Appointment } from "../entity/Appointment";
import { Employee } from "../entity/Employee";
import { Customer } from "../entity/Customer";

import { AppDataSource } from "../data-source";

@Resolver()
export class AppointmentResolver {
  @Query(() => [Appointment])
  async appointments() {
    return await AppDataSource.getRepository(Appointment).find();
  }

  @Query(() => Appointment, { nullable: true })
  async appointment(@Arg('id') id: string) {
    const appointment = await AppDataSource.getRepository(Appointment).findOne({
      where: { id },
      relations: ['employee', 'customer'],
    });
  
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    return appointment;
  }

  @Query(() => [Appointment], { nullable: true })
  async getAppointmentsByCustomerId(
    @Arg('customerId') customerId: string,
  ): Promise<Appointment[]> {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
  
    const appointments = await appointmentRepository
      .createQueryBuilder('appointment')
      .leftJoinAndSelect('appointment.customer', 'customer')
      .leftJoinAndSelect('appointment.employee', 'employee')
      .where('appointment.customerId = :customerId', { customerId })
      .getMany();
  
    return appointments;
  }

  @Query(() => [Appointment], { nullable: true })
  async getAppointmentsByEmployeeId(
    @Arg('employeeId') employeeId: string,
  ): Promise<Appointment[]> {
    const appointmentRepository = AppDataSource.getRepository(Appointment);

    const appointments = await appointmentRepository
      .createQueryBuilder('appointment')
      .leftJoinAndSelect('appointment.employee', 'employee')
      .where('appointment.employeeId = :employeeId', { employeeId })
      .getMany();

    return appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(
    @Arg("appointmentTime") appointmentTime: string,
    @Arg("appointmentDate") appointmentDate: string,
    @Arg("employeeId") employeeId: string,
    @Arg("customerId") customerId: string
  ) {
    const employee = await AppDataSource.getRepository(Employee).findOneBy({ id: employeeId });
    const customer = await AppDataSource.getRepository(Customer).findOneBy({ id: customerId });

    if (!employee) throw new Error("Employee not found");
    if (!customer) throw new Error("Customer not found");

    const appointment = new Appointment();
    appointment.appointmentTime = appointmentTime;
    appointment.appointmentDate = new Date(appointmentDate);
    appointment.employee = employee;
    appointment.customer = customer;

    const appointmentRepository = AppDataSource.getRepository(Appointment);
    return await appointmentRepository.save(appointment);
  }

  @Mutation(() => Boolean)
  async deleteAppointment(@Arg("id") id: string) {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const appointment = await appointmentRepository.findOneBy({ id });

    if (!appointment) throw new Error("Appointment not found");

    await appointmentRepository.remove(appointment);
    return true;
  }
}
