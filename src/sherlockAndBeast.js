const getPivot = (n) => {
    while( n > 0 ) {
        if( n%3 === 0 ) {
            break;
        } else {
            n -= 5;
        }
    }
    return n;
};

const decentNumber = (n) => {
    const pivot = getPivot(n);
    if (pivot < 0) {
        console.log("-1");
    } else {
        let fives = '';
        let threes = '';
        if(pivot) {
            fives = '5'.padEnd(pivot, '5');
        }
        const threesCount = n - pivot;
        if (threesCount) {
            threes = '3'.padEnd(threesCount, '3');
        }
        console.log(fives + threes);
    }
}

decentNumber(3);