function destroyer() {
  arr = arguments[0];
  pars = [];

  for (var i = 0; i < (arguments.length + 1); i++) {
    pars[i] = arguments[i + 1];
  }

  return arr.filter((number) => {
    if (-1 === pars.indexOf(number)) {
      return number;
    }
  });
}

// const destroyer = (arr, ...params) => (arr.filter(n => !params.find(p => p === n)))
