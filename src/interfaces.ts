import { Employee, Manager, Person } from "./models";

function showPeople(people: Person[]): void {
  for (const person of people) {
    console.log(person.firstName);
  }
}

function showEmployees(employees: Employee[]): void {
  for (const employee of employees) {
    console.log(employee.company);
  }
}

function showManagers(managers: Manager[]): void {
  for (const manager of managers) {
    console.log(manager.level);
  }
}

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
