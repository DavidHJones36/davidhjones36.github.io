// const sayHello = function () {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello5';

// const sayHello = () => ({ msg: 'Hello'});

// const sayHello = name => console.log(`Hello ${name}`);

// const sayHello = (name, age) => console.log(`Hello ${name} ${age}`);

// sayHello('Brad', 36);

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// const nameLengths = users.map((name) => {
//   return name.length;
// });

const nameLengths = users.map(name => name.length);

console.log(nameLengths);