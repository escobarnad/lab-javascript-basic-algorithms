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
