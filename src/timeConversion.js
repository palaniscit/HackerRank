function timeConversion(s) {
    const modifier = s.includes('AM') ? 'AM' : 'PM';
    const myTime = s.substring(0, 8);
    let [hours, minutes, seconds] = myTime.split(':');

    if (modifier === 'AM' && Number(hours) === 12) {
        hours = '00';
    }

    if (modifier === 'PM' && Number(hours) !== 12) {
        hours = String(Number(hours) + 12);
    }
    return `${ hours }:${ minutes }:${ seconds }`;
}

console.log(timeConversion('01:00:00PM'));