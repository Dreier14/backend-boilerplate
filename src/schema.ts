// export const typeDefs = `#graphql
// type Appointment {
//   id: ID!
//   appointmentTime: String!
//   appointmentDate: String!
//   employee: Employee!
//   customer: Customer!
// }

// type Availability {
//   id: ID!
//   slotTime: String!
//   date: Date!
//   employee: Employee!
// }

// type Customer {
//   id: ID!
//   firstName: String!
//   lastName: String!
//   email: String!
//   phoneNumber: String!
// }

// type Employee {
//   id: ID!
//   firstName: String!
//   lastName: String!
//   availabilities: [Availability!]!
// }

// type Query {
//   appointments(id: ID!): [Appointment!]!
//   appointment(id: ID!): Appointment
//   availabilities: [Availability!]!
//   employeeAvailabilities(employeeId: ID!): [Availability!]!
//   customers: [Customer!]!
//   customer(email: String!): Customer
//   customer(id: ID!): Customer
//   employees: [Employee!]!
//   employee(id: ID!): Employee
//   getAppointmentsByEmployeeId(id: ID!): [Appointment!]!
// #   getAppointmentsByCustomerId(id: ID!): [Appointment!]!
// }

// type Mutation {
//   createAppointment(
//     appointmentTime: String!,
//     appointmentDate: String!,
//     employeeId: ID!,
//     customerId: ID!
//   ): Appointment!

//   deleteAppointment(id: ID!): Boolean!

//   createAvailability(
//     employeeId: ID!,
//     slotTime: String!,
//   ): Availability!

//   deleteAvailability(id: ID!): Boolean!

//   createCustomer(firstName: String!, lastName: String!, email: String!, phoneNumber: String!): Customer!

//   deleteCustomer(id: ID!): Boolean!

//   createEmployee(firstName: String!, lastName: String!): Employee!

//   deleteEmployee(id: ID!): Boolean!
// }
// `;