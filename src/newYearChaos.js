function minimumBribes(q) {
    let bribeCounter = 0;
    let chaoticFlag = false;
    for(let i = q.length-1; i >= 0; i -= 1) {
        let initialPosition = q[i];
        let currentPosition = i + 1;

        if ((initialPosition - currentPosition) > 2) {
            chaoticFlag = true;
            break;
        } 

        for (let j = q[i]-2; j < i; j += 1) {
            if (q[j] > q[i]) {
                bribeCounter += 1;
            }
        }
    }
    if (chaoticFlag) {
        console.log('Too chaotic');
    } else {
        console.log(bribeCounter);
    }
}

minimumBribes([2,3,5,4,6,1,9,8,7]);