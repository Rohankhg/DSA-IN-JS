function fibonacci(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    return sum;
}


const num = 5;
console.log(fibonacci(num))