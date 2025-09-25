// 13. Using a loop, write a program that counts the number of spaces in the string `"Hello EveryOne"`.

let str = "Hello EveryOne";
let spaceCount = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
        spaceCount++;
    }
}

console.log("Number of spaces in the string: " + spaceCount);