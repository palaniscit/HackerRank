// 5 positive integers
// Find 4 of the 5 which when summed will give the minimum value and maximum value. 
// Print the minimum and maximum values

function miniMaxSum(arr) {
    let max = BigInt(0);
    let sum = BigInt(arr[0]) + BigInt(arr[1]) + BigInt(arr[2]) + BigInt(arr[3]) + BigInt(arr[4]);
    let min = sum;
    for (let i = 0; i < arr.length; i += 1) {
        let tempSum = sum - BigInt(arr[i]);
        if (min > tempSum) {
            min = tempSum;
        }
        if (max < tempSum) {
            max = tempSum;
        }
    }
    console.log(`${ min } ${ max }`);
}

miniMaxSum([1,3,5,7,9]);