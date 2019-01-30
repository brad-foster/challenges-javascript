//Find how many loops it would take to determine the additive persistence of an integer.

//Sample input -> output:

//13 -> 1
//1234 -> 2
//9876 -> 2
//199 -> 3

var findNecessaryAdditiveLoops = function(numberToAssess) {
  var numberOfLoops = 0, hasReachedPersistence = false;

  var numContainer = numberToAssess;
  while(!hasReachedPersistence) {
    if(!numberOfLoops) {
      numContainer = addDigitsInNumber(numberToAssess);
    } else {
      numContainer = addDigitsInNumber(numContainer);
    }

    ('' + numContainer).split('').length > 1 ? hasReachedPersistence = false : hasReachedPersistence = true;

    numberOfLoops++;
  }

  console.log(numberOfLoops);
}

var addDigitsInNumber = function(numberToAdd) {
  var digits = ('' + numberToAdd).split('');

  var addedNumber = 0;

  for(var i = 0; i < digits.length; i++) {
    addedNumber += parseInt(digits[i]);
  }

  return addedNumber;
}

findNecessaryAdditiveLoops(13);
findNecessaryAdditiveLoops(1234);
findNecessaryAdditiveLoops(9876);
findNecessaryAdditiveLoops(199);
