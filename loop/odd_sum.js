// 5. Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10.

let OddSum = 0
for(i=1; i<=10; i++){
    if(i%2!==0){
        OddSum += i
    }
}
console.log("The sum of odd numbers between 1-10 is " + OddSum)