function pickingNumbers(a) {
    // Write your code here
    a.sort(function (x, y) {
        return x - y;
    });

    let longestArrLength = 0;
    let i = 0;
    let endFlag = false;
    while ( i < a.length && !endFlag) {
        let currArrLength = 1;
        let nextIndex = i;
        for (let j = i+1; j < a.length; j += 1) {
            if (Math.abs(a[i] - a[j]) <= 1) {
                currArrLength += 1;
                if (nextIndex === i && a[i] !== a[j]) {
                    nextIndex = j;
                }
            } else { 
                i = (nextIndex !== i) ? nextIndex : i+1;
                if (currArrLength > longestArrLength) {
                    longestArrLength = currArrLength;
                }
                if (j === a.length - 1) {
                    endFlag = true;
                }
                break;
            }
            if (j === a.length - 1) {
                endFlag = true;
                if (currArrLength > longestArrLength) {
                    longestArrLength = currArrLength;
                }
            }
        }
    }
    return longestArrLength;
}

console.log(pickingNumbers([4,97,5,97,97,4,97,4,97,97,97,97,4,4,5,5,97,5,97,99,4,97,5,97,97,97,5,5,97,4,5,97,97,5,97,4,97,5,4,4,97,5,5,5,4,97,97,4,97,5,4,4,97,97,97,5,5,97,4,97,97,5,4,97,97,4,97,97,97,5,4,4,97,4,4,97,5,97,97,97,97,4,97,5,97,5,4,97,4,5,97,97,5,97,5,97,5,97,97,97]));
console.log(pickingNumbers([66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66]));