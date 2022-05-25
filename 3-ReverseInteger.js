const num = 3849;

function reverseGivenInteger(num) {
    let myNum = num.toString();
    let myArr = [];
    for (let i = 0; i < myNum.length; i++) {
        myArr.unshift(myNum[i]);
    }
    myNum = "";
    for (let i = 0; i < myArr.length; i++) {
        myNum += myArr[i];
    }


    return parseInt(myNum,10);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
