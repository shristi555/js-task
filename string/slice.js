// Write a program that slices the first 5 characters of a string and checks if this substring is equal to
// `"Hello"`.

let str = "Hello EveryOne";
let slicedStr = str.slice(0, 5);

if(slicedStr === "Hello"){
    console.log("The first 5 characters are 'Hello'.");
} else {
    console.log("The first 5 characters are not 'Hello'.");
}       