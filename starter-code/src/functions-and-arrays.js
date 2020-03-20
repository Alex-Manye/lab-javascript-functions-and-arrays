
// Find the maximum

function maxOfTwoNumbers(num1, num2){
if (num1>num2){
  return num1;
} else if (num1<num2){
  return num2;
} else {
  console.log (`The 2 numbers are the same`)
}
}

maxOfTwoNumbers(3,5);

// Finding Longest Word

let words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wor3) {
  let longestWord = [];

for (let i=0; i<words.length; i++){

    if (words[i].length > longestWord.length){
        longestWord = words[i];
    
      } 
  } //return longestWord; 
  console.log(longestWord);
}

// Calculating a Sum (with loop);

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(){
    let sumatorio =0;

  for (let i=0; i<numbers.length; i++){
    sumatorio =numbers[i] + sumatorio

  } 
}

// Calculating a Sum (with reduce method);

var sum = numbers.reduce(function (sum, num){return sum + num},0);
//console.log (sum)

function sumNumbersReduce(total, num){
    return total + num;

}

// A generic sum() function

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

//Shoudl return -> 57

function mixedSum(){
  let suma = 0;

  for (let i=0; i<mixedArr.length; i++){
      switch (typeof mixedArr[i]){

    case "number":
      suma += mixedArr[i]; 
      console.log (suma)
      break;
    case "string":
      suma += parseInt(mixedArr[i].length)
      console.log (suma)
      break;
    case  "boolean":
        if (mixedArr[i] === true){
          suma += 1; 
        } else {
          suma += 0;
        } console.log (suma)
        break;
  } 
} return suma;

}

// Calculate the Average

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9 ]; 
// Should return -> 48/ 8 = 6
function averageNumbers(){
    let sum = 0;
    let avNumbers = 0;
    for (let i=0; i<numbers2.length; i++){
      sum += numbers2[i];
      avNumbers = sum/(numbers2.length)
    } return avNumbers

}

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
//Should return -> 53/10=5.3

function averageWordLength(){
 let avNumber=0;
 let sum=0;
 
 for (let i=0; i<words2.length; i++){
      sum += words2[i].length 
      console.log(sum);
      console.log(words2.length);
      avNumber = sum/words2.length 
  }
  return avNumber;
}

//Iteration #4.1: A generic avg() function

function avg(arr) {

let avNumber = (mixedSum(arr)/arr.length);
console.log(arr.lenght)
console.log(avNumber);
return avNumber;
}


console.log(avg(mixedArr));


// Iteration #5: Unique arrays

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array){
  let newArray = [];

   for (let i=0; i<array.length; i++){

    if(newArray.indexOf(array[i]) === -1){
      newArray.push(array[i])
    }
  } return newArray;
} 
console.log(uniquifyArray(words3));

// Iteration 6 - Finding Elements
// We could do that also with Js includes() method.

const wordsFindArray = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

let wordToFind = "subset";

function doesWordExist(array, word){

  for (let i=0; i<array.length; i++){
    if (array[i] === word){
      return true
    }
  } return false
}

console.log(doesWordExist(wordsFindArray,wordToFind)); 

// Counting Repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

let wordToSearch ="matter";

function howManyTimes(array, word){
  let counter = 0;
  for (let i=0; i<array.length; i++){
    if (array[i] === wordToSearch){
      counter += 1;
    }
  } return counter;

}

//console.log(howManyTimes(wordsCount,wordToSearch));

