function viralAdvertising(n) {
    // Write your code here
    let likedCount = 0;
    let sharedCount = 5;
    for (let i = 1; i <= n; i+=1) {
        const currentDayLikedCount = Math.floor(sharedCount/2);
        sharedCount = currentDayLikedCount * 3;
        likedCount += currentDayLikedCount;
    }
    return likedCount;
}

console.log(viralAdvertising(5));