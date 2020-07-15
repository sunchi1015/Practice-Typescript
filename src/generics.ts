class EmployeeaseComponent<T> {
  add(x: T, y: T): T {
    return x + y;
  }
}

class Employee extends EmployeeaseComponent<number> {
  constructor(private type: string) {
    super();
    console.log('Class Instantiated');
    console.log('Type --->', type);
    const res = this.add(2, 4);
    console.log('ress --->', res);
  }
}

new Employee('Employee');

class EmployeeNew extends EmployeeaseComponent<string> {
  constructor(private type: string) {
    super();
    console.log('Class Instantiated');
    console.log('Type --->', type);
    const res = this.add('Sunil', 'Anil');
    console.log('ress --->', res);
  }
}

new EmployeeNew('Employee New');
