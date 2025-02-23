import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Employee } from "../entity/Employee";
import { AppDataSource } from "../data-source";

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employees() {
    return await AppDataSource.getRepository(Employee).find();
  }

  @Query(() => Employee, { nullable: true })
  async employee(@Arg("id") id: string) {
    return await AppDataSource.getRepository(Employee).findOneBy({ id });
  }

  @Mutation(() => Employee)
  async createEmployee(@Arg("firstName") firstName: string, @Arg("lastName") lastName: string) {
    const employee = new Employee();
    employee.firstName = firstName;
    employee.lastName = lastName;

    const employeeRepository = AppDataSource.getRepository(Employee);
    return await employeeRepository.save(employee);
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id") id: string) {
    const employeeRepository = AppDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOneBy({ id });

    if (!employee) throw new Error("Employee not found");

    await employeeRepository.remove(employee);
    return true;
  }
}
