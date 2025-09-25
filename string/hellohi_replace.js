// 12. Write a program that checks if a string contains the word `"Hello"` using `if-else` statements. If it
// does, replace it with `"Hi"`.

let str = "Hello EveryOne";

if(str.includes("Hello")){
    let newStr = str.replace("Hello", "Hi");
    console.log("The modified string is: " + newStr);
} else {
    console.log("The string does not contain 'Hello'.");
}       