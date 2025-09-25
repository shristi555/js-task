// Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.

let str = "Hello EveryOne";
let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}

console.log("Number of vowels in the string: " + count);