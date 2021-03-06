// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(howLong){
  console.log(howLong);
});

/////////////////////////////////////////////////////////////////
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}

last(items, function(last){
  console.log(last)
});
/////////////////////////////////////////////////////////////////

let add = function(x,y) {  // create model 
  return x + y;
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y); 
}

console.log(sumNums(4,3,add))
/////////////////////////////////////////////////////////////////


let multiply = function(x,y) {
  return x * y;
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y)
}

console.log(multiplyNums(2,2,multiply))


/////////////////////////////////////////////////////////////////

let check = function(item, list) {
  if(list.includes(item)) {
    return true
  }  else {
    return false
  }
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  return cb(item,list)
  // Pass true to the callback if it is, otherwise pass false.
}

console.log(contains('hello', items, check))
console.log(contains('yo-yo', items, check))
console.log(contains('Gum', items, check))

/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

let myArray = []
let newArray = [];
function removeItems(arr){
   for(i=0;i<arr.length; i++) {
      if(newArray.indexOf(arr[i]) === -1) {
        newArray.push(arr[i])
      }
   }
   return newArray
}; 


function removeDuplicates(array, cb) {
  
  return cb(array);
}

console.log(removeDuplicates(['Tom', 'Sam', 'Tom', 'Sam', 3, 5, 3, 18], removeItems))
