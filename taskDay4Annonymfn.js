
//1.Print odd numbers in an array:
// Anonymous function
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // IIFE
  (function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5]);


  //2.Convert all the strings to title caps in a string array:
  // Anonymous function
const titleCaps = function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  };
  
  // IIFE
  const titleCapsResult = (function(arr) {
    return arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
  })(["apple", "banana", "cherry"]);
  
  console.log(titleCapsResult);
  
//3.Sum of all numbers in an array:

// Anonymous function
const sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  };
  
  // IIFE
  const sumResult = (function(arr) {
    return arr.reduce(function(acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5]);
  
  console.log(sumResult);

  //4.Return all the prime numbers in an array:

  // Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    });
  };
  
  // IIFE
  const primeNumbersResult = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    });
  })([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  console.log(primeNumbersResult);

  //5.Return all the palindromes in an array:

  // Anonymous function
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  };
  
  // IIFE
  const palindromesResult = (function(arr) {
    return arr.filter(function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    });
  })(["level", "radar", "hello", "world", "madam"]);
  
  console.log(palindromesResult);

  //6.Return median of two sorted arrays of the same size:

  // Anonymous function
const findMedian = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(combinedArray.length / 2);
    
    if (combinedArray.length % 2 === 0) {
      return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
      return combinedArray[mid];
    }
  };
  
  // IIFE
  const medianResult = (function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(combinedArray.length / 2);
    
    if (combinedArray.length % 2 === 0) {
      return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
      return combinedArray[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(medianResult);

  //7.Remove duplicates from an array:

  // Anonymous function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
  };
  
  // IIFE
  const uniqueArrayResult = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArrayResult);

  //8.Rotate an array by k times:
  // Anonymous function
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };
  
  // IIFE
  const rotatedArrayResult = (function(arr, k) {
    const rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  })([1, 2, 3, 4, 5], 2);
  
  console.log(rotatedArrayResult);
