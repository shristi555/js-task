// Write a program that replaces the first 3 characters of a string with "ABC" using slicing and `if-else`
// statements.

let str = "Hello EveryOne";
let modifiedStr = "ABC" + str.slice(3);

if(str.length >= 3){
    console.log("Modified string: " + modifiedStr);
} else {
    console.log("String is too short to replace the first 3 characters.");
}   