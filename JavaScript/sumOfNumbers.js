// This function have the elements of array
function listOfArray() {
  const numbers = [5, 10, 15, 20];
  return numbers;
}

// This function is used reduce method to sum the array
function sumArrays(arrays) {
  const totalSum = arrays.reduce((total, num) => total + num, 0);
  return totalSum;
}

// Calling functions
const arrays = listOfArray();
const total = sumArrays(arrays);
console.log(total);



