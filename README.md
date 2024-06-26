function powerOfTwoBitwise(num) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0
}