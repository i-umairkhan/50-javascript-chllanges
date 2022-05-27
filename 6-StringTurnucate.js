const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    let limit = 0;
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            limit++;
        }
        if (limit === wordLimit) {
            break;
        }
        newStr += str[i];
    }

    return newStr;
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
