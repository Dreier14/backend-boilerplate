import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Customer } from "../entity/Customer";
import { AppDataSource } from "../data-source";

@Resolver()
export class CustomerResolver {
  @Query(() => [Customer])
  async customers() {
    return await AppDataSource.getRepository(Customer).find();
  }

  @Query(() => Customer, { nullable: true })
  async customer(@Arg("id") id: string) {
    return await AppDataSource.getRepository(Customer).findOneBy({ id });
  }

  @Query(() => Customer, { nullable: true })
  async email(@Arg("email") email: string) {
    return await AppDataSource.getRepository(Customer).findOneBy({ email });
  }

  @Mutation(() => Customer)
  async createCustomer(
    @Arg("firstName") firstName: string, 
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("phoneNumber") phoneNumber: string,
  ) {
    const customer = new Customer();
    customer.firstName = firstName;
    customer.lastName = lastName;
    customer.email = email;
    customer.phoneNumber = phoneNumber;

    const customerRepository = AppDataSource.getRepository(Customer);
    return await customerRepository.save(customer);
  }

  @Mutation(() => Boolean)
  async deleteCustomer(@Arg("id") id: string) {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOneBy({ id });

    if (!customer) throw new Error("Customer not found");

    await customerRepository.remove(customer);
    return true;
  }
}
