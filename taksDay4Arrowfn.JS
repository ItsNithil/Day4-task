//programs in arrow functions.

//1.Print odd numbers in an array:

const printOddNumbers = arr => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5]);

  
  //2.Convert all the strings to title caps in a string array:

  const titleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  };
  
  const titleCapsResult = titleCaps(["apple", "banana", "cherry"]);
  console.log(titleCapsResult);

  //3.Sum of all numbers in an array:

  const sumArray = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  const sumResult = sumArray([1, 2, 3, 4, 5]);
  console.log(sumResult);

  //4.Return all the prime numbers in an array:

  const getPrimeNumbers = arr => {
    return arr.filter(num => {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    });
  };
  
  const primeNumbersResult = getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(primeNumbersResult);

  
  //5.Return all the palindromes in an array:

  const getPalindromes = arr => {
    return arr.filter(str => {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  };
  
  const palindromesResult = getPalindromes(["level", "radar", "hello", "world", "madam"]);
  console.log(palindromesResult);
  

