// 16. Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6,
// ..., 20).

let EvenSum = 0
for(let i=1; i<=20; i++){
    if(i%2==0){
        EvenSum += i
    }
}
console.log("The sum of first 10 even numbers is " +EvenSum)