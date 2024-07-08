import { gql } from 'apollo-server';

const typeDefs = gql`
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

export default typeDefs;
