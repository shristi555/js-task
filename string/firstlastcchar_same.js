// 17. Using a loop, write a program that checks if the first and last characters of a string are the same. Use
// `if-else` statements to print the result.

let str = "radar";

if(str.length > 0 && str[0] === str[str.length - 1]){
    console.log("The first and last characters are the same.");
} else {
    console.log("The first and last characters are not the same.");
}   