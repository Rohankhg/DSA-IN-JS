
//Method 1
function powerOfTwo(num) {
    let isPower = true;
    for (let i = num; i >= 2; i = i / 2) {
        if (i % 2 === 0) {
            isPower = true;
        }
        else {
            return false;
        }
    }
    return isPower
}

console.log(powerOfTwo(3))

//Big-O = log(n)


//Method 2
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

//Big-O = log(n)

//Liner time complexity can be acheive using bitwise operator

function powerOfTwoBitwise(num) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0
}

//constant time complexity O(1)