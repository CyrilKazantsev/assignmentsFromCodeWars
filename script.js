// the most scored word
function high(text) {
  let words = text.split(" ");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let largestWordNumber = 0;
  let largestWord = "";
  for (let i = 0; i < words.length; i++) {
    let currentWord = 0;
    let word = words[i];
    for (let l = 0; l < word.length; l++) {
      currentWord += alphabet.indexOf(word[l].toLowerCase()) + 1;
    }
    if (currentWord > largestWordNumber) {
      largestWordNumber = currentWord;
      largestWord = word;
    }
  }
  return largestWord;
}
console.log(high("its a good text"));

// Short walk: return in 10 to the same place

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let result = [0, 0];
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        result[0]++;
        break;
      case "s":
        result[0]--;
        break;
      case "w":
        result[1]--;
        break;
      case "e":
        result[1]++;
        break;
    }
  }
  return result[0] === 0 && result[1] === 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter((x) => x == A[i]).length % 2 !== 0) return A[i];
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// Calculator

function zero(func) {
  return func ? eval(`0${func}`) : 0;
}
function one(func) {
  return func ? eval(`1${func}`) : 1;
}
function two(func) {
  return func ? eval(`2${func}`) : 2;
}
function three(func) {
  return func ? eval(`3${func}`) : 3;
}
function four(func) {
  return func ? eval(`4${func}`) : 4;
}
function five(func) {
  return func ? eval(`5${func}`) : 5;
}
function six(func) {
  return func ? eval(`6${func}`) : 6;
}
function seven(func) {
  return func ? eval(`7${func}`) : 7;
}
function eight(func) {
  return func ? eval(`8${func}`) : 8;
}
function nine(func) {
  return func ? eval(`9${func}`) : 9;
}
function plus(b) {
  return `+${b}`;
}
function minus(b) {
  return `-${b}`;
}
function times(b) {
  return `*${b}`;
}
function dividedBy(b) {
  return `/${b}`;
}
console.log(seven(times(five())));
console.log(five(times(seven())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

// Greed is Good

//  Greed is a dice game played with five six-sided dice. Your mission, 
// should you choose to accept it, is to score a throw according to these rules. 
// You will always be given an array with five six-sided dice values.
// A single die can only be counted once in each roll. For example, a given "5" can 
// only count as part of a triplet (contributing to the 500 points) or as a single 
// 50 points, but not both in the same roll.

function score(dice) {
  let result = 0;
  let number = 0;
  let count = 0;

  for (let i = 0; i < dice.length; i++) {
    let len = dice.filter((item) => item == dice[i]).length;
    if (count < len) {
      count = len;
      number = dice[i];
    }
  }
  if (count < 3) {
    result += dice.filter((item) => item === 1).length * 100;
    result += dice.filter((item) => item === 5).length * 50;
  } else {
    switch (number) {
      case 1:
        result += 1000;
        result += (count - 3) * 100;
        result += dice.filter((item) => item === 5).length * 50;
        break;
      case 5:
        result += number * 100;
        result += (count - 3) * 100;
        result += dice.filter((item) => item === 1).length * 100;
        break;
      default:
        result += number * 100;
        result += dice.filter((item) => item === 1).length * 100;
        result += dice.filter((item) => item === 5).length * 50;
    }
  }
  return result;
}

console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450
console.log(score([5, 5, 5, 5, 5])); // 700
