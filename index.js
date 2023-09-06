// Iteration 1: Names and Input
let hacker1 = "Nadia";
console.log(`The drive's name is ${hacker1}`);

let hacker2 = "Milo";
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  
  else if (hacker1.length < hacker2.length) {
    
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
  else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let count = "";


for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  count += char + " ";

}
console.log(`${count.toUpperCase()}`)

let wordReversed = "";

for (let i= hacker2.length -1; i >= 0; i--) {
  let char = hacker2[i];
  wordReversed += char;
}

console.log(wordReversed);

let result = hacker1.localeCompare(hacker2)

if (result < 0){
  console.log("The driver's name goes first.")
}
else if (result > 0){
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

function countWords (inputString) {
    const words = inputString.split(' ');
    
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
      if (words [i] !== ' '); {
        count++;
      }
    }
   return count; 
    
  }
  
  console.log(countWords(longText));
  
  
  function countEt (inputString) {
    const countWords = inputString.split(' ');
    
    let sum = 0;
    
    for (let i = 0; i < countWords.length; i++) {
      if (countWords [i] === 'et') {
        sum++;
      }
    }
   return sum; 
    
  }
  
  console.log(countEt(longText));

  //Bonus 2
  let phraseToCheck = "we panic in a pew"
  let phraseReversed = "";
  let phraseNoSpaces = "";
  
  
  for (let i = 0; i < phraseToCheck.length; i++){
    if (phraseToCheck[i] === " "){
      continue
    }
    
    phraseNoSpaces += phraseToCheck[i];
  }
  
    
  for (let i = phraseNoSpaces.length - 1; i >= 0; i--) {
    let char = phraseNoSpaces[i];
    phraseReversed += char;
  }
   
    
  if (phraseNoSpaces === phraseReversed){
    console.log ("It is a Palindrome")
  }
  else {
    console.log ("It's not a Palindrome")
  }

