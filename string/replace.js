// 11. Create a program that replaces every vowel in a string with an asterisk (*) using a loop.

let str = "Hello EveryOne";
let vowels = "aeiouAEIOU";
let newStr = "";

for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
        newStr += '*';
    } else {
        newStr += str[i];
    }
}

console.log("String after replacing vowels: " + newStr);