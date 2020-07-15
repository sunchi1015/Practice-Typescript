// Simple add method implemented in custom class Generics
class EmployeeaseComponent<T> {
  add(x: T, y: T): T {
    return x + y;
  }
}

class Employee extends EmployeeaseComponent<number> {
  constructor(private type: string) {
    super();
    const res = this.add(2, 4);
    console.log('add for number --->', res);
  }
}

new Employee('Employee');

class EmployeeNew extends EmployeeaseComponent<string> {
  constructor(private type: string) {
    super();
    const res = this.add('Sunil', 'Anil');
    console.log('add for string --->', res);
  }
}

new EmployeeNew('Employee New');

// Built in generics

const arr: Array<string> = ['a', 'b', 'c'];
console.log(arr);

const promoCodes: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('moveisecode100123');
  }, 1000);
});

promoCodes.then(data => {
  console.log('promo codes --->', data.charAt(0));
});

// Generic function

function combineObejct<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign(obj1, obj2);
}

const fullobj = combineObejct({ name: 'Bhishma' }, { age: 5000 });
console.log('combine object -->', fullobj);

// Working with constraints - extends

interface Custom {
  length: number;
}
function calcArrLength<T extends Custom>(arr: T): void {
  console.log('generics with extends--->', arr.length);
}
calcArrLength([1, 2, 3]);

// keyof
interface CustomObj {
  name: string;
  age: number;
  salary: number;
}
function findObjectbasedonKey<T extends CustomObj, K extends keyof T>(obj: T, key: K): void {
  console.log('keyof object --->', obj[key]);
}
findObjectbasedonKey({ name: 'hammer', age: 23, salary: 3000 }, 'age');
