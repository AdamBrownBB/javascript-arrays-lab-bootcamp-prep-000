var kittens = ["Milo", "Otis", "Garfield"] 

// Add your functions and code here
/* run the test
use PUSH to add new name to the end 
*/


function destructivelyAppendKitten(name) {
  kittens.push(name);
}

// use UNSHIFT to add new name to beginning

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

// use POP to remove last. 
// no need for argument because it's removal, not addition

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

// use SHIFT to remove first, no argument needed

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

// use SPREAD OPERATOR to add name to the end

function appendKitten(name) {
  
  return [...kittens, name];
  
}

// use SPREAD OPERATOR to add name to the beginning

function prependKitten(name) {
  
  return [name, ...kittens];
  
}


/*  

*/

function removeLastKitten() {
  
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}

