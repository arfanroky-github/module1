// ternery operator

const age: number = 2;
const isAdult = age >= 18 ? console.log("Yes") : console.log("No");



// null and undefined
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName)

const hell:string = 'asdf'

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));
console.log(addTwo(5));