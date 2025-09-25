// 8. Write a program that trims any extra spaces at the beginning and end of a string and then checks if the
// string is empty.

let str = "   Hello World!   ";
let trimmedStr = str.trim();

if(trimmedStr === ""){
    console.log("The string is empty after trimming.");
} else {
    console.log("The string is not empty after trimming: '" + trimmedStr + "'");
}   