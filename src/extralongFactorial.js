function extraLongFactorials(n) {
    // Write your code here
    let factorial = BigInt(n);
    for ( let i = n-1; i > 0; i -= 1 ) {
        factorial = factorial * BigInt(i);
    }
    console.log(factorial.toString());
    return factorial;
}

extraLongFactorials(25);