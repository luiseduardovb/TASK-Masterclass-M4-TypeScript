export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Employee extends Person {
  company: string;
  position: string;
}

export interface Manager extends Employee {
  level: number;
}
