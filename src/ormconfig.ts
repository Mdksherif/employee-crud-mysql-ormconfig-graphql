import { ConnectionOptions } from "typeorm";
import { employee } from "./entity/employee";

const ormconfig: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "employee_db",
    synchronize: true,
    logging: false,
    entities: [
        employee
    ],
};

export default ormconfig;
