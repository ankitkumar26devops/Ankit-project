// Function to add two matrices
function addMatrices(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    result.push(row);
  }
  return result;
}

// Example matrices
const matrix1 = [
  [1, 2],
  [3, 4],
];

const matrix2 = [
  [5, 6],
  [7, 8],
];

// Adding the matrices
const resultMatrix = addMatrices(matrix1, matrix2);

// Printing the result
console.log("Matrix 1:");
console.log(matrix1);
console.log("Matrix 2:");
console.log(matrix2);
console.log("Result Matrix:");
console.log(resultMatrix);