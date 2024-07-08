"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
  type Employee {
    id: ID!
    name: String!
    profession: String!
    projects: [String!]!
    salary: Float!
    status: String!
  }

  type Query {
    getEmployee(id: ID!): Employee
    getEmployees: [Employee!]!
  }

  type Mutation {
    createEmployee(name: String!, profession: String!, projects: [String!]!, salary: Float!, status: String!): Employee
    updateEmployee(id: ID!, name: String, profession: String, projects: [String!], salary: Float, status: String): Employee
    deleteEmployee(id: ID!): Boolean
  }
`;
exports.default = typeDefs;
