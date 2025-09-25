// 7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `if-
// else` statements.


let str = "madam";
let reversedStr = str.split('').reverse().join('');

if(str === reversedStr){
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}