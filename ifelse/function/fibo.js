// Write a function printFibonacciSeries(n) that prints the first n Fibonacci numbers.
function printFibonacciSeries(n) {
    let a = 0, b = 1;
    for(let i = 1; i <= n; i++){
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibonacciSeries(10);