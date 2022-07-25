console.log(1 / 0);

console.log(1 + '12');

console.log('Nan' ** 0);

const bigInt = 123456789012345678901234567890123456789054545454545455454554545454n;
const b = 2n;
console.log(bigInt + b);

const str = "bangef";
const str2 = 'sigle quotes juga bisa';
const backtics = `Hello, ${str}!`;
console.log(backtics);

let testNull = null;
console.log(testNull);

let testUndefined;
console.log(testUndefined);

/**
 * TASK :
 * 1. String Quotes
 *  - Apa output dari skrip ini ?
 */

let name = "Ilya";

console.log(`hello ${1}`); // hello 1

console.log(`hello ${name}`); // hello Ilya

console.log(`hello ${"name"}`); // hello name