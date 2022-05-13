// the most scored word
function high(text) {
    let words = text.split(" ")
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let largestWordNumber = 0;
    let largestWord = "";
    for (let i = 0; i < words.length; i++) {
      let currentWord = 0;
      let word = words[i];
      for (let l = 0; l < word.length; l++) {
        currentWord += (alphabet.indexOf(word[l].toLowerCase()) + 1)
      }
      if (currentWord > largestWordNumber) {largestWordNumber = currentWord; largestWord = word}
    }
    return largestWord
}
console.log(high("its a good text"))

// Short walk: return in 10 to the same place
function isValidWalk(walk) {
  if (walk.length !== 10) return false
  let result = [0, 0];
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
        case "n": result[0]++; break;
        case "s": result[0]--; break;
        case "w": result[1]--; break;
        case "e": result[1]++; break;
    }
  }
  return (result[0] === 0 && result[1] === 0)
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));


function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter(x => x==A[i]).length % 2 !== 0) return A[i]
  }
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


// Calculator

function zero(func) {
  if (func) {
    return eval(`0${func}`)
  } else {
    return 0
  }
}
function one(func) {
  if (func) {
    return eval(`1${func}`)
  } else {
    return 1
  }
}
function two(func) {
  if (func) {
    return eval(`2${func}`)
  } else {
    return 2
  }
}
function three(func) {
  if (func) {
    return eval(`3${func}`)
  } else {
    return 3
  }
}
function four(func) {
  if (func) {
    return eval(`4${func}`)
  } else {
    return 4
  }
}
function five(func) {
  if (func) {
    return eval(`5${func}`)
  } else {
    return 5
  }
}
function six(func) {
  if (func) {
    return eval(`6${func}`)
  } else {
    return 6
  }
}
function seven(func) {
  if (func) {
    return eval(`7${func}`)
  } else {
    return 7
  }
}
function eight(func) {
  if (func) {
    return eval(`8${func}`)
  } else {
    return 8
  }
}
function nine(func) {
  if (func) {
    return eval(`9${func}`)
  } else {
    return 9
  }
}

function plus(b) {
  return `+${b}`
}
function minus(b) {
  return `-${b}`
}
function times(b) {
  return `*${b}`
}
function dividedBy(b) {
  return `/${b}`
}
console.log(seven(times(five())));
console.log(five(times(seven())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));



