function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	let num = rangeEnd - rangeStart + 1;
    let random = Math.random() * num;
    let result = Math.floor(random) + rangeStart;

	return result;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
