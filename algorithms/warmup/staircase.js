function staircase(n) {
  let tree = "";
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i + 1; j--) {
      tree += " ";
    }
    for (let k = 0; k <= i; k++) {
      tree += "#";
    }
    if (i != n - 1) {
      tree += "\n";
    }
  }
  console.log(tree);
}
