function diagonalDifference(arr) {
  let principal = 0;
  let secondary = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        principal += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        secondary += arr[i][j];
      }
    }
  }
  return Math.abs(principal - secondary);
}