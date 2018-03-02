module.exports = function solveSudoku(matrix) {
  // your solution
  function sudokuNumFound(i, j, matrix, num) {
    let matrixLength =matrix.length;
    let ii = Math.floor(i / 3),
    jj = Math.floor(j / 3);

    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == num)
        return false;
    }

    for (let k = 0; k < matrixLength; k++) {
      if (matrix[k][j] == num)
        return false;
    }
    
    for (let k = 3 * ii; k < 3 * ii + 3; k++) {
      for (let l = 3 * jj; l < 3 * jj + 3; l++) {
        if (matrix[k][l] == num)
          return false;
      }
    }
    return true;
  }
  let flag = 0;

  function depthFirstSearch(matrix, index) {
    if (index > 80) {
      flag = 1;
      return;
    }
    let i = Math.floor(index / 9),
      j = index % 9;
    if (matrix[i][j] !== 0)
      return depthFirstSearch(matrix, index + 1);
    for (let x = 1; x <= 9; x++) {
      if (sudokuNumFound(i, j, matrix, x)) {
        matrix[i][j] = x;
        depthFirstSearch(matrix, index + 1);
      }
    }
    if (flag === 0)
      matrix[i][j] = 0;
  }
  depthFirstSearch(matrix, 0);
  return matrix;
}
