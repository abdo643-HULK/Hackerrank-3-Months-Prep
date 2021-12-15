'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
	inputString += inputStdin;
});

process.stdin.on('end', function (): void {
	inputLines = inputString.split('\n');
	inputString = '';

	main();
});

function readLine(): string {
	return inputLines[currentLine++];
}

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */
function separateNumbers(s: string): void {
	// As the time of writing this doesn't work on hackerrank
	// for Typescript and has to be submitted as JS.
	// From the testing it looks like there are some big numbers
	// and because Numbers are floats in JS we get overflows
	for (let i = 1; i < s.length; ++i) {
		const slice = s.slice(0, i);

		let nextNumber = BigInt(slice) + 1n;
		let testString = s.slice(slice.length);

		do {
			if (testString.indexOf(nextNumber + '') === 0) {
				testString = testString.slice(('' + nextNumber).length);
			} else {
				if (testString.length !== 0) break;
				return console.log('YES ' + slice);
			}
			++nextNumber;
		} while (true);
	}

	console.log('NO');
}

function main() {
	const q: number = parseInt(readLine().trim(), 10);

	for (let qItr: number = 0; qItr < q; qItr++) {
		const s: string = readLine();

		separateNumbers(s);
	}
}
