import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Availability } from "../entity/Availability";
import { Employee } from "../entity/Employee";
import { AppDataSource } from "../data-source";

@Resolver()
export class AvailabilityResolver {
  @Query(() => [Availability])
  async availabilities() {
    return await AppDataSource.getRepository(Availability).find();
  }

  @Mutation(() => Availability)
  async createAvailability(
    @Arg("employeeId") employeeId: string,
    @Arg("slotTime") slotTime: string,
    @Arg("date") date: Date
  ) {
    const employee = await AppDataSource.getRepository(Employee).findOneBy({id: employeeId});

    if (!employee) throw new Error("Employee not found");

    const availability = new Availability();
    availability.slotTime = slotTime;
    availability.date = date;
    availability.employee = employee;

    const availabilityRepository = AppDataSource.getRepository(Availability);
    return await availabilityRepository.save(availability);
  }
}
