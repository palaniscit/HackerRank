function saveThePrisoner(n, m, s) {
    // Write your code here
    let outputChairNbr = 0; 
    // 4, 6, 2 // Expected Output = 3
    // 6/4 = 1.5
    // 6-(4*1) = 2
    // (s-1) + 2 = (2-1) + 2 = 3 // Final Output

    // 4, 3, 3 // Expected Output = 1
    // 3/4 = 0
    // 3-(4*0) = 3
    // (s-1) + 3 = (3-1) + 3 = 5 --> if output > n --> output = (5-n) = 5-4 = 1
    // n = number of prisoners, m = number of chocolates, s = starting position
    
    //m=m*2;
    const nbrOfFullRounds = Math.floor(m/n);
    let pendingAfterFullRound = m - (n * nbrOfFullRounds);

    if (pendingAfterFullRound === 0) {
        if (s === 1) {
            return n;
        } else { 
            return s-1;
        }
    }

    let output = (s-1) + pendingAfterFullRound;
    if (output > n) {
        output = output - n;
    }
    // console.log(output);
    return output;
}

//saveThePrisoner(999999999, 999999999, 1);
// saveThePrisoner(499999999, 999999998, 2);
console.log(saveThePrisoner(8, 117991680, 2));