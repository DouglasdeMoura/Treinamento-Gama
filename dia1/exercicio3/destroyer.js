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

destroyer([1,2,3,1], 2, 3);
