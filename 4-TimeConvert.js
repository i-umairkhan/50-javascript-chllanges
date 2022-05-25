const time = '12:10AM';

function convertTo24HrsFormat(time) {
    let hours = (time.substr(0, 2));
    let minutes = (time.substr(3, 2));
    if (time.endsWith('AM') && hours === '12') {
        hours = '00';
    }
    else if (time.endsWith('AM') && hours.endsWith(':')) {
        hours = (time.substr(0, 1));
        minutes = (time.substr(2, 2));
        hours = '0' + hours;
    }
    else if (time.endsWith('PM') && hours === '12') {
        hours = hours;
    }
    else if (time.endsWith('PM') && minutes.endsWith('P') && parseInt(hours) < 12) {
        hours = (time.substr(0, 2));
        minutes = (time.substr(3, 1))
        minutes = '0' + minutes;
        let newHours = parseInt(hours);
        hours = (12 + newHours);
    }
    else if (time.endsWith('PM') && parseInt(hours) < 12) {
        let newHours = parseInt(hours);
        hours = (12 + newHours);
    }

    return `${hours}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
