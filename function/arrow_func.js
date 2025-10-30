// 1. Write an arrow function that returns the sum of two numbers.

const sum = (a,b) => a + b;

console.log("Sum of two numbers is: " + sum(10,40));


// 2. Write an arrow function that returns the square of a number.

const square = num => num * num;

console.log("Square of a number is: " + square(8));

// 3. Write an arrow function that checks if a number is even or odd.

const isEven = num => num % 2 === 0 ? "Even" : "Odd";

console.log("The number is: " + isEven(9));

// 4. Write an arrow function that returns the length of a string.

const stringLength = str => str.length;

console.log("Length of the string is: " + stringLength("Hello World"));

// 5. Write an arrow function that converts String to Uppercase.

const upper = str => str.toUpperCase();

console.log("Uppercase string: " + upper("arrow function"));

// 6. Write an arrow function that returns the larger of two numbers.

const maxOfTwo = (a, b) => a > b ? a : b;

console.log("Maximum of two numbers is: " + maxOfTwo(40, 30));

// 7. Write an arrow function that checks if a number is positive, negative, or zero.

const checkNumber = num => {
    if(num > 0) return "Positive";
    else if(num < 0) return "Negative";
    else return "Zero";
};

console.log("The number is: " + checkNumber(-2));

// 8. Write an arrow function that concatenates two strings.
const concatenate = (str1, str2) => str1 + str2;

console.log("Concatenated string: " + concatenate("Hello, ", "World!"));




// 9. Write an arrow function that takes an array of numbers and returns the first element.                       

const firstElement = arr => arr[0];

console.log("First element of the array is: " + firstElement([5, 10, 15, 20]));     




// 11. Write an arrow function that returns last character of a given string.



const lastCharacter = str => str.charAt(str.length - 1);

console.log("Last character of the string is: " + lastCharacter("Hello"));



// 13. Write an arrow function that returns all strings longer than 5 characters from an array.

const filterLongStrings = arr => arr.filter(str => str.length > 5);

console.log("Strings longer than 5 characters: " + filterLongStrings(["apple", "banana", "kiwi", "strawberry", "mango", "orange"]));

// 16.Write an arrow function that filters out numbers greater than 10 from an array.

const filterGreaterThanTen = arr => arr.filter(num => num <= 10);

console.log("Numbers less than or equal to 10: " + filterGreaterThanTen([5, 11, 6, 40, 2, 18, 27]));

// 15. Write an arrow function that checks if a given element exists in an array.

const existsInArray = (arr, element) => arr.includes(element);

console.log("Element exists in array: " + existsInArray([1, 2, 3, 4, 5], 3));

// 14. Write an arrow function that doubles each number in an array.

const doubleArray = arr => arr.map(num => num * 2);

console.log("Doubled array: " + doubleArray([1, 2, 3, 4, 5]));