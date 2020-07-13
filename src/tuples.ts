// Tuples

interface Person {
  name: string;
  role: [number, string];
}

const person: Person = {
  name: 'Sunil',
  role: [23, 'Employee']
};

person.role[1] = 'New Employee';
person.role.push(undefined);
// person.role = [];
console.log('Person Tuples---->', person);

// Enum

enum Grade {
  FIRST = 75,
  SECOND,
  FAIL
}

const student = {
  passGrade: Grade.SECOND
};

console.log('student pass percentage --->', student);

// Union Types

const data: number | string = 'Hellow Data';
console.log('union types --->', data);

// Literal Types

const domainType: 'http' | 'https' = 'http';
console.log('union types --->', domainType);

// Type Alias or Custom Types

type data = string | number;
// let employee: data = 'John';
const employee: data = 123;
console.log('Employee name or id only--->', employee);

// Function as type or Customise Function type
// for names function or function express
// or with the interface tof function types

interface funcInt {
  (source: string, id: number): string;
}
const mufnc: funcInt = function(src, id): string {
  return src + ' ' + id;
};
console.log('funct interface types --->', mufnc('empid', 1234));
const myFunc: (source: string, id: number) => string = function(src, id): string {
  return src + ' ' + id;
};
const str = myFunc('employee', 123);
console.log('inline function types --->', str);

//
