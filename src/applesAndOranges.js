function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here => s = start, t = end, a = appletree, b = orangetree, apples = array, orange = array
    let appleCounter = 0;
    let orangeCounter = 0;
    
    let maxCount = apples.length >= oranges.length ? apples.length : oranges.length;
    
    for ( let i = 0; i < maxCount; i+=1) {
        if(i < apples.length) {
            if((apples[i] + a) >= s && (apples[i] + a) <= t) {
                appleCounter++;
            }
        }   
        if(i < oranges.length) {
            if((oranges[i]+b) >= s && oranges[i]+b <= t) {
                orangeCounter++;
            }
        }     
    }
    console.log(appleCounter);
    console.log(orangeCounter);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);