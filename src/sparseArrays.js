function matchingStrings(strings, queries) {
    // Write your code here
    const outputArray = new Array(queries.length);
    const countMap = {};
    
    for(let i = 0; i < queries.length; i += 1) {
        let query = queries[i];
        let queryCounter = 0;
        let j = 0;
        if (countMap[query]) {
            outputArray[i] = countMap[query];
            continue;
        }
        while ( j < strings.length ) {
            if (strings[j] === query) {
                queryCounter += 1;
                strings.splice(j, 1);
            } else {
                j += 1;
            }
        }
        countMap[query] = queryCounter;
        outputArray[i] = queryCounter;
    }
    return outputArray;
}

console.log(matchingStrings(['aba','baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab', 'xzxb']));
