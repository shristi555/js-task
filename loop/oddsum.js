// 13. Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9).

let OddSum = 0

for(i=1; i<=10; i++){
    if(i%2!==0){
        OddSum += i
    }
}
console.log("The sum of first five odd number is " + OddSum)
