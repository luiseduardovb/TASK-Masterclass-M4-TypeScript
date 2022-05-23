import { Employee, Manager, Person } from "./models";

function showPeople(people: Person[]): void {}

function showEmployees(employees: Employee[]): void {}

function showManagers(managers: Manager[]): void {}

export function main(): void {
  showPeople([{ firstName: "foo", lastName: "bar", age: 17 }]);
  showEmployees([
    {
      firstName: "foo",
      lastName: "bar",
      age: 17,
      company: "MyHome",
      position: "Software Engineer",
    },
  ]);
  showManagers([
    {
      firstName: "foo",
      lastName: "bar",
      age: 17,
      company: "MyHome",
      position: "Software Engineer",
      level: 3,
    },
  ]);
}
