const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }

  return sum;
	
};

const multiply = function(array) {
  let multiSum = 1;
  for (let i = 0; i < array.length; i++){
    multiSum *= array[i];
  }
  return multiSum;
};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(a) {
  let fact = 1;
  if(a===0){
    return 1;
  }
  
  for (let i = 1; i <= a; i++){
    fact *= i;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
