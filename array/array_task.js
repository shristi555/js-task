// create an array of ten numbers and print the first and last element.

let numbers = [10,20,30,40,50,60,70,80,90,100];

console.log("First element: " +numbers[0]);
console.log("Last element: " +numbers[numbers.length - 1]);


// Find the length of an array and print every element using for loop.

let numbers = [10,20,30,40,50,60,70,80,90,100];

console.log("The length of an array is: " + numbers.length);

for (let i = 0; i < numbers.length; i++){
    console.log("Element at index " + i + ":" +numbers[i]);
}

// print all numbers greater than 5 from an Array.

let nums = [2,5,8,1,4,10,12,3,7,6];

console.log("Numbers greater than 5 are: ");
for (let i = 0; i < nums.length; i++){
    if(nums[i] > 5){
        console.log(nums[i]);
    }
}   

// Count how many even numbers are in the Array.

let count = 0;
for (let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        count++;
    }
}   
console.log("Total even numbers in the array: " + count);

// Find the sum of all odd numbers in the Array.

let sumOdd = 0;
for (let i = 0; i < nums.length; i++){
    if(nums[i] % 2 !== 0){
        sumOdd += nums[i];
    }
}   
console.log("Sum of all odd numbers in the array: " + sumOdd);

// Print all numbers that are divisible by 3.

let divisibleBy3 = [2,9,15,22,33,40,45,50,60,72];
for (let i = 0; i < divisibleBy3.length; i++){
    if(divisibleBy3[i] % 3 === 0){
        console.log(divisibleBy3[i]);
    }
}
console.log("All numbers divisible by 3 are: " + divisibleBy3);

// Multiply every number by 3 using Map() and print the new Array.

let arr = [1,2,3,4,5,6,7,8,9];

let newArr = arr.map(item => {
    return item * 3; 
});

console.log("New Array after multiplying every number by 3: " + newArr);

// Use forEach() to print the square of each Element.

let squaresArr = [1,2,3,4,5];

squaresArr.forEach(item => {
    console.log("Square of " + item + " is: " + (item * item));
});


// `From[10,20,30,40,50], Create a new array that contains each number divided by 10 using map().

let originalArr = [10,20,30,40,50];

let dividedArr = originalArr.map(item => {
    return item / 10;
});

console.log("New Array after dividing each number by 10: " + dividedArr);


// Use map() to convert an array of numbers into their double + 1(e.g.[1,2,3] = > [3,5,7]).

let arr = [1,2,3];

let newArr = arr.map(item => {
    return (item * 2) + 1;
});

console.log("New Array after operation: " + newArr);

// Create a new array that contains only even numbers from another array using filter().

let mixedArr = [1,2,3,4,5,6,7,8,9,10];

let result = [];

for (let i = 0; i < mixedArr.length; i++){
    if(mixedArr[i] % 2 === 0){
        result.push(mixedArr[i]);
    }
}

console.log("Array with only even numbers: " + result);

// Use a loop to find how many numbers are greater than 100.

let numArray = [50,120,200,30,90,150,80,300,60];

let count = 0;
for (let i = 0; i < numArray.length; i++){
    if(numArray[i] > 100){
        count++;
    }
}
console.log("Total numbers greater than 100: " + count);

// Write a function that returns the sum of all numbers in an array.

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let numbers = [10,20,30,40,50];
console.log("Sum of all numbers in the array: " + sumArray(numbers));

// Find the largest number in an array.

let arr = [10,45,23,67,89,12,90,34];

let largest = arr[0];
for (let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log("The largest number in the array is: " + largest);


// Find the smallest number in an array.

let arr = [10,45,23,67,89,12,90,34];

let smallest = arr[0];
for (let i = 1; i < arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}
console.log("The smallest number in the array is: " + smallest);



