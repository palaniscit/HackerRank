function climbingLeaderboard(ranked, player) {
    // Write your code here
    const output = [];
    const distinctRanked = Array.from(new Set(ranked));

    const newOutput = [];
    let i = distinctRanked.length - 1;
    for (let curr of player) {
        while (i >= 0) {
            if (i===0) {
                newOutput.push(1);
                break;
            }
            if (curr === distinctRanked[i]) {
                newOutput.push(i+1);
                break;
            } else {
                if ((distinctRanked.length-1) === i && curr < distinctRanked[i]) {
                    newOutput.push(i+2);
                    break;
                } else if(curr > distinctRanked[i] && curr < distinctRanked[i-1]) {
                    newOutput.push(i+1);
                    break;
                }
            }
            i -= 1;
        }
    }
    return newOutput;
}

console.log(climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120]));