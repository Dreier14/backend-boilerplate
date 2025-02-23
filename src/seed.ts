import { AppDataSource } from "./data-source";
import { Employee } from "./entity/Employee";
import { Customer } from "./entity/Customer";
import { Availability } from "./entity/Availability";
import { Appointment } from "./entity/Appointment";

export async function seed() {
  await AppDataSource.initialize();

  await AppDataSource.getRepository(Appointment).delete({});
  await AppDataSource.getRepository(Availability).delete({});
  await AppDataSource.getRepository(Customer).delete({});
  await AppDataSource.getRepository(Employee).delete({});

  const employee1 = new Employee();
  employee1.firstName = "John";
  employee1.lastName = "Doe";
  await AppDataSource.getRepository(Employee).save(employee1);

  const employee2 = new Employee();
  employee2.firstName = "Jack";
  employee2.lastName = "Links";
  await AppDataSource.getRepository(Employee).save(employee2);

  const employee3 = new Employee();
  employee3.firstName = "Joe";
  employee3.lastName = "Vivo";
  await AppDataSource.getRepository(Employee).save(employee3);

  const employee4 = new Employee();
  employee4.firstName = "Tony";
  employee4.lastName = "Soprano";
  await AppDataSource.getRepository(Employee).save(employee4);

  const employee5 = new Employee();
  employee5.firstName = "Walter";
  employee5.lastName = "White";
  await AppDataSource.getRepository(Employee).save(employee5);

  const employee6 = new Employee();
  employee6.firstName = "Tommy";
  employee6.lastName = "Vercetti";
  await AppDataSource.getRepository(Employee).save(employee6);

  const employee7 = new Employee();
  employee7.firstName = "Vince";
  employee7.lastName = "Vaughan";
  await AppDataSource.getRepository(Employee).save(employee7);

  const employee8 = new Employee();
  employee8.firstName = "Jim";
  employee8.lastName = "Lahey";
  await AppDataSource.getRepository(Employee).save(employee8);

  console.log("Seeding complete.");
}

seed().catch((error) => {
  console.error("Error during data seeding:", error);
});
