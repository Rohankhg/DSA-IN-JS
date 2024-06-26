function primeNumber(num){
    let isPrime=true;
    if(num<2){
        return true;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i===0){
            isPrime=false;
        }
    }
    return isPrime;
}

console.log(primeNumber(12));

//Big-O= O(log(n))