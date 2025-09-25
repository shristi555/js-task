// 16. Write a program that trims a string, then checks if its length is even or odd using `if-else` statements.

let str = "   Hello World!   ";
let trimmedStr = str.trim();

if(trimmedStr.length % 2 === 0){
    console.log("The length of the trimmed string is even.");
} else {
    console.log("The length of the trimmed string is odd.");
}   