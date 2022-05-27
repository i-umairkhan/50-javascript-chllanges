const number = '+919876543210';

function validateMobile(number) {
    let reg = /.+91/g;
    if (reg.test(number))
        return true;
    else if (number.startsWith(0) && number.length === 11)
        return true;
    else if (!number.startsWith(0) && number.length === 10)
        return true;
    else
        return false;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
