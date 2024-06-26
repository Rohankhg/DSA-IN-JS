function fibonacci(num) {
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo

}

const num = 5; //[0,1,1,2,3]
console.log(fibonacci(num));
console.log(fibonacci(10));//[ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]


//Big-O = O(n)