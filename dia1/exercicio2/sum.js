// Soma o intervalo entre os números
function sumInterval(arr) {
  var array = [];
  arr.sort((a, b) => a - b); // Coloca o array em ordem crescente
  limit = arr.pop();
  for (var i = 0; i < limit; i++) {
    array[i] = arr[0] + i;
  }

  return array.reduce((a, b) => a + b);
}

sumInterval([1,4]);
