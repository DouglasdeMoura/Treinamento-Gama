function dropElements(arr, callback) {
  return arr.filter(callback);
}

dropElements([1, 2, 3, 4], (n) => { return n > 3;});
