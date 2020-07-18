console.log('++++ Third party Libraries ++++');
import _ from 'lodash';
declare const globalString: string;
// above typescript show error becaue we
// this is the js library so typescript wont understand
// didnt install type
console.log('lodash with types ---> ', _.shuffle([1, 2, 3, 4, 5]));

// Global declare
console.log('Global Constants---->', globalString);

// Spread operator
class C {
  p = 12;
  m = () => {};
}
let c = new C();
let clone = { ...c };
console.log('spread error --->', clone);
clone.p; // ok
clone.m(); // error!
