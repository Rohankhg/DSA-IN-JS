function primeNumber(num){
    let isPrime=true;
    if(num<2){
        return true;
    }
    //for(let i=2;i<=Math.sqrt(num);i++)///O(sqrt(n)) is the time complexity in this case
    for(let i=2;i<=num/2;i++){
        if(num%i===0){
            isPrime=false;
        }
    }
    return isPrime;
}

console.log(primeNumber(12));

//Big-O= O(log(n))