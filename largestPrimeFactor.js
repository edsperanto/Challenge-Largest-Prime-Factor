exports.largestPrimeFactor = function(n){
  var primeNumber = 2;
  var newOperand = n;
  var notFound = true;
  var notDivided = true;
  // do your work here

  while(notFound) {
    while(notDivided) { // divide by current prime number
      if(newOperand%primeNumber === 0) {
        newOperand = newOperand / primeNumber;
      }else{
        notDivided = false;
      }
    }
    findNewPrime(n);
    if(primeNumber === newOperand) {
      notFound = false;
      primeNumber = newOperand;
    }
  }

  function findNewPrime() {
    var notFound = true;
    primeNumber++; // add 1 first
    while(notFound) {
      for(var i = 2; i < primeNumber; i++) { // check if not prime
        if((primeNumber % i) === 0) { // if not prime
          primeNumber++; // find new prime number
          i = 2; // restart checking number
        }
        if(i === (primeNumber - 1)) { // if is prime
          notFound = false;
        }
      }
    }
  }

  return primeNumber;
};