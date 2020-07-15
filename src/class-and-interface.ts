abstract class Base {
  abstract add(arg1: number, arg2: number): number;
}
class App extends Base {
  constructor(private type: string) {
    super();
    console.log('Class Instantiated');
    console.log('Type --->', this.type);
  }

  add(arg1: number, arg2: number): number {
    return arg1 + arg2;
  }
}

const emp = new App('Employee');
const result = emp.add(2, 3);

console.log('add result --->', result);

// key of
interface Car {
  name: string;
  model: number;
}
const on: keyof Car = {
  name: 'maruthi',
  model: 2015
};

console.log('key of object --->', on);
