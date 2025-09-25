// 19. Create a program that uses a loop to reverse a string and print the reversed string.

let str = "Hello EveryOne";
let reversedStr = "";

for(let i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
}

console.log("Reversed string: " + reversedStr); 