// 9. Using a loop, write a program that converts every letter in a string to lowercase if it’s uppercase, and
// to uppercase if it’s lowercase.

let str = "Hello EveryOne";
let newStr = "";

for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        newStr += str[i].toLowerCase();
    } else {
        newStr += str[i].toUpperCase();
    }
}

console.log("Changed string: " + newStr);