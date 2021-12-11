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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
	const n = arr.length;

	let positives = 0;
	let negatives = 0;
	let zeros = 0;

	for (const val of arr) {
		if (val == 0) ++zeros;
		else if (val > 0) ++positives;
		else if (val < 0) ++negatives;
	}

	console.log(`${(positives / n).toFixed(6)}`);
	console.log(`${(negatives / n).toFixed(6)}`);
	console.log(`${(zeros / n).toFixed(6)}`);
}

function main() {
	const n: number = parseInt(readLine().trim(), 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	plusMinus(arr);
}
