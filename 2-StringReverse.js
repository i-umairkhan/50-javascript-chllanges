const str = "JavaScript is awesome"

function reverseAString(str) {
    let strReaverse = "";
    let myArr = [];
    for (let i = 0; i < str.length; i++) {
        myArr.unshift(str[i]);
    }
    for (let i = 0; i < myArr.length; i++) {
        strReaverse += myArr[i];
    }

    return strReaverse;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
