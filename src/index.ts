import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/AppointmentResolver";
import { EmployeeResolver } from "./resolvers/EmployeeResolver";
import { CustomerResolver } from "./resolvers/CustomerResolver";
import { AvailabilityResolver } from "./resolvers/AvailabilityResolver";
import { AppDataSource } from "./data-source";

(async () => {
  try {
    await AppDataSource.initialize();

    console.log("Datasource initialized.");

    const schema = await buildSchema({
      resolvers: [
        AppointmentResolver,
        EmployeeResolver,
        CustomerResolver,
        AvailabilityResolver
      ],
    });

    const server = new ApolloServer({
      schema,
    });

    const { url } = await server.listen(4000);
    console.log(`🚀 Server running at ${url}/graphql`);
  } catch (e) {
    console.log("Failed to initialize datasource:", e);
    process.exit(1);
  }
})();
