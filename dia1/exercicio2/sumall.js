// Soma todos os números do array
function sumAll(arr) {
  return arr.reduce((a, b) => a + b);
}

// Soma o intervalo entre os números

function sumInterval(arr) {
  var array = [];
  limit = arr.pop();
  for (var i = 0; i < limit; i++) {
    array[i] = arr[0] + i;
  }

  return sumAll(array);
}

sumInterval([1,4]);