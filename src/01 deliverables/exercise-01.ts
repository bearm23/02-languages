console.log("************** DELIVERABLE 01 *********************");

const array1 = ['blue', 'gray', 'yellow', 'green', 'red'];



console.log("*********** Head ***********");

const head = <T extends unknown[]>(array: T) => {
    const [first] = array;
    return first;
};

console.log('ARRAY:', array1);
console.log('RESULT:', head(array1));



console.log("*********** Tail ***********");

const tail = ([, ...args]) => args;

console.log('ARRAY:', array1);
console.log('RESULT:', tail(array1));



console.log("*********** Init ***********");

const init = <T extends Array<any>>(array: T) => {
    const newArray = [...array];
    newArray.pop();
    return newArray;
};

console.log('ARRAY:', array1);
console.log('RESULT:', init(array1));



console.log("*********** Last ***********");

const last = <T extends Array<any>>(array: T) => array.slice(-1)[0];

console.log('ARRAY:', array1);
console.log('RESULT:', last(array1));
