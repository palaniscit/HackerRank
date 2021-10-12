function appendAndDelete(s, t, k) {
    // Write your code here
    let isPossible = 'No';
    if (s === t) {
        return 'Yes';
    }
    if(Math.abs(s.length - t.length) > k) {
        return 'No';
    }
    let temp = s;
    let pivot = 0;
    while (k > 0) {
        k -= 1;
        temp = temp.substring(0,temp.length-1);
        if (temp === t) {
            return 'Yes';
        }
        if (t.substring(0,temp.length) === temp) {
            pivot = t.substring(temp.length, t.length);
            if (pivot.length > k) {
                return 'No';
            } else {
                return 'Yes';
            }
        }
    }
    return isPossible;
}

console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(appendAndDelete('abcd', 'abcdert', 10));
console.log(appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 100));