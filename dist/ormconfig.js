"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./entity/employee");
const ormconfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "employee_db",
    synchronize: true,
    logging: false,
    entities: [
        employee_1.employee
    ],
};
exports.default = ormconfig;
