const str = 'XeroX';

function getTheGapX(str) {
    let firstIndex = str.indexOf('X');
    let lastIndex = str.lastIndexOf('X');
    if (firstIndex == -1 || lastIndex == -1) {
        return -1;
    }
    else { return lastIndex - firstIndex };
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
