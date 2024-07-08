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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const employee_1 = require("../entity/employee");
const employeeRepository = (0, typeorm_1.getRepository)(employee_1.employee);
const resolvers = {
    Query: {
        getEmployee: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield employeeRepository.findOne({ where: { id } });
        }),
        getEmployees: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield employeeRepository.find();
        })
    },
    Mutation: {
        createEmployee: (_2, _b) => __awaiter(void 0, [_2, _b], void 0, function* (_, { name, profession, projects, salary, status }) {
            const employee = employeeRepository.create({ name, profession, projects, salary, status });
            return yield employeeRepository.save(employee);
        }),
        updateEmployee: (_3, _c) => __awaiter(void 0, [_3, _c], void 0, function* (_, { id, name, profession, projects, salary, status }) {
            const employee = yield employeeRepository.findOne({ where: { id } });
            if (!employee)
                throw new Error("Employee not found");
            if (name)
                employee.name = name;
            if (profession)
                employee.profession = profession;
            if (projects)
                employee.projects = projects;
            if (salary)
                employee.salary = salary;
            if (status)
                employee.status = status;
            return yield employeeRepository.save(employee);
        }),
        deleteEmployee: (_4, _d) => __awaiter(void 0, [_4, _d], void 0, function* (_, { id }) {
            const employee = yield employeeRepository.findOne({ where: { id } });
            if (!employee)
                throw new Error("Employee not found");
            yield employeeRepository.remove(employee);
            return true;
        })
    }
};
exports.default = resolvers;
