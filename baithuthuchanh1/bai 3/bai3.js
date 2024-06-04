function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 3; i * i <= number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function findPrimeNumbers(arr) {
    var primeNumbers = [];

    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }

    return primeNumbers.sort(function(a, b) {
        return a - b;
    });
}

var numbers = [1,5,6,23,8,47,10,3];
var primeArray = findPrimeNumbers(numbers);
console.log(primeArray);