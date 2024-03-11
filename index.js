const myArray = [1, 2, 3];

// Define a function that returns the index of a given value in the array
function findIndex(value) {
  return myArray.indexOf(value);
}

// Export the function to make it accessible to other modules
module.exports = findIndex;
