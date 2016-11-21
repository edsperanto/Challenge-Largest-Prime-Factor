exports.largestPrimeFactor = function(n){
  var primeNumber = 2;
  var newOperand = n;
  var notFound = true;
  var notDivided = true;
  // do your work here

  while(notFound) {
    notDivided = true; // reset notDivided so it starts dividing in next loop
    while(notDivided) { // divide by current prime number
      if(newOperand % primeNumber === 0) { // if current prime is a factor of the current operand
        newOperand = newOperand / primeNumber; // make quotient the new operand
      }else{ // if current number is not a factor of current operand
        notDivided = false; // stop dividing!
      }
    }
    findNewPrime(); // find new prime
    if(primeNumber >= (newOperand / 2)) { // if prime number becomes bigger than half of operand
      notFound = false; // break out of loop
      if(newOperand != 1) { // fix bug in situations where remainder is 1
        primeNumber = newOperand; // the final prime number is the remainder
      }
    }
  }

  function findNewPrime() {
    var notFound = true;
    var i = 2;
    primeNumber++; // add 1 first
    while(notFound) {
      while(i < primeNumber) { // check if not prime
        if((primeNumber % i) === 0) { // if not prime
          primeNumber++; // find new prime number
          i = 2; // restart checking number
        }
        if(i >= (primeNumber / 2)) { // if is prime
          notFound = false; // break out of loop and end function
        }
        i++;
      }
    }
  }

  return primeNumber; // return answer
};