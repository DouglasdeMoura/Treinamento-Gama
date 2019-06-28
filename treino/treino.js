/*
Implement the function unique_in_order which takes as argument a sequence
and returns a list of items without any elements with the same value
next to each other and preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function(iterable) {
  var arr = [];
  for (var i = 0; i < iterable.length; i++) {
    if (undefined == iterable[i - 1] ) {
      arr[i] = iterable[i];
    } else if (iterable[i - 1] !== iterable[i]) {
      arr[i] = iterable[i];
    }
  }

  return arr.filter(function (el) {
    return el != null;
  });
}

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything
but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
 */

function validatePIN (pin) {
  var pin2 = parseInt(pin);
  return ('number' === typeof pin2 && (4 === pin2.toString().length || 6 === pin2.toString().length));
}
