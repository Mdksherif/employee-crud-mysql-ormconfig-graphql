"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const apollo_server_1 = require("apollo-server");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const schema_1 = __importDefault(require("./schema"));
const employeeresolver_1 = __importDefault(require("./resolver/employeeresolver"));
(0, typeorm_1.createConnection)(ormconfig_1.default).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.default, resolvers: employeeresolver_1.default });
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})).catch(error => console.log(error));
