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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q: number[]): void {
	let bribes = 0;

	for (let i = 1; i <= q.length; ++i) {
		const person = q[i - 1];
		if (person - i > 2) return console.log('Too chaotic');

		// j should not start with a negative number if
		// the element is too small
		for (let j = Math.max(0, person - 2); j < i; ++j) {
			if (q[j] > person) ++bribes;
		}
	}

	console.log(bribes);
}

function main() {
	const t: number = parseInt(readLine().trim(), 10);

	for (let tItr: number = 0; tItr < t; tItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		const q: number[] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((qTemp) => parseInt(qTemp, 10));

		minimumBribes(q);
	}
}
