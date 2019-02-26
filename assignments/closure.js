// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const addTwo = () => {
  let num = 0
  const adding = () => {
    num = num + 2
    return num
  }
  return adding
}

const plusTwo = addTwo()
console.log(plusTwo())
console.log(plusTwo())
console.log(plusTwo())



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

console.log('Challenge 2')
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const countVar = () => {
    return ++count
  }
  return countVar
};
// Example usage: const newCounter = counter();
const newCounter = counter()
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

console.log('Challenge 3')

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let num = 0;
  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: function () {
       num++;
       return num;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: function () {
       num--;
       return num;
    }

  }
};


let number = counterFactory();
console.log(number.increment())
console.log(number.increment())
console.log(number.decrement())
// console.log(number.decrement())
// console.log(number.increment())
// console.log(number.increment())
// console.log(number.increment())
// console.log(number.increment())
// console.log(number.increment())
// console.log(number.decrement())

