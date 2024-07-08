import { getRepository } from "typeorm";
import { employee } from "../entity/employee";

const employeeRepository = getRepository(employee);

const resolvers = {
  Query: {
    getEmployee: async (_: any, { id }: { id: number }) => {
      return await employeeRepository.findOne({ where: { id } });
    },
    getEmployees: async () => {
      return await employeeRepository.find();
    }
  },
  Mutation: {
    createEmployee: async (_: any, { name, profession, projects, salary, status }: { name: string, profession: string, projects: string[], salary: number, status: string }) => {
      const employee = employeeRepository.create({ name, profession, projects, salary, status });
      return await employeeRepository.save(employee);
    },
    updateEmployee: async (_: any, { id, name, profession, projects, salary, status }: { id: number, name?: string, profession?: string, projects?: string[], salary?: number, status?: string }) => {
      const employee = await employeeRepository.findOne({ where: { id } });
      if (!employee) throw new Error("Employee not found");

      if (name) employee.name = name;
      if (profession) employee.profession = profession;
      if (projects) employee.projects = projects;
      if (salary) employee.salary = salary;
      if (status) employee.status = status;

      return await employeeRepository.save(employee);
    },
    deleteEmployee: async (_: any, { id }: { id: number }) => {
      const employee = await employeeRepository.findOne({ where: { id } });
      if (!employee) throw new Error("Employee not found");

      await employeeRepository.remove(employee);
      return true;
    }
  }
};

export default resolvers;
