console.log("************** DELIVERABLE 02 *********************");

const fruits = ['tomato', 'banana', 'apple', 'orange'];
const vegetables = ['cucumber', 'onion', 'broccoli'];



console.log("*********** Concat ***********");

const concat = <T extends unknown[], U extends unknown[]>(a: T, b: U) => [...a, ...b];

console.log('ARRAY 1:', fruits);
console.log('ARRAY 2:', vegetables);
console.log('RESULT:', concat(fruits, vegetables));



console.log("*********** Concat multiple arrays ***********");

const concatMultiple = <T extends unknown[]>(...arrays: T) => Array.prototype.concat(...arrays);

console.log('RESULT:', concatMultiple(fruits, vegetables, fruits, fruits, vegetables));
