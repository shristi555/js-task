// 1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`.

let str = "Hello EveryOne";
let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === 'e' || str[i] === 'E'){
        count++;
    }
}

console.log("The letter 'e' appears " + count + " times in the string.");