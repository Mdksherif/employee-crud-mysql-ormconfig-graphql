import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import ormconfig from "./ormconfig";
import typeDefs from "./schema";
import resolvers from "./resolver/employeeresolver";

createConnection(ormconfig).then(async connection => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch(error => console.log(error));
