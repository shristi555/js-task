// Write a program that loops through a string and prints only the uppercase letters.

let str = "Hello EveryOne";
let upperCaseLetters = "";

for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase() && str[i] !== ' '){
        upperCaseLetters += str[i];
    }
}

console.log("Uppercase letters in the string: " + upperCaseLetters);