console.log('++++ Hellow Decorators ++++');

function Find(value: string) {
  console.log('decorator factory ---->', value);
  return function(constructor: any) {
    console.log('deco find --->', constructor);
    const p = new constructor();
    console.log('p', p);
    document.write(p.name);
  };
}

@Find('Sample Test')
class Employeee {
  name: string = 'Jebi';
  age: number;
  constructor(name: string, age: number) {
    this.name = 'New Jebi';
    // this.name = name;
    this.age = age;
  }
}

new Employeee('Sunil', 23);
