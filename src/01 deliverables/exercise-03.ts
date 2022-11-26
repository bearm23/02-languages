console.log("************** DELIVERABLE 03 *********************");

console.log("*********** Clone ***********");

const user = {
    id: 23,
    name: 'bea',
    master: 'lemoncode',
};

function clone<T extends Object>(source: T) {
    return { ...source };
}

console.log('OBJECT:', user);
console.log('RESULT:', clone(user));



console.log("*********** Merge ***********");

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge<T extends Object, U extends Object>(source: T, target: U) {
    return {
        ...target,
        ...source,
    }
}

console.log('RESULT:', merge(a, b));