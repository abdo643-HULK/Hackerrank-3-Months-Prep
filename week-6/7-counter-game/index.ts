'use strict';

import { WriteStream, createWriteStream } from 'fs';
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
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function counterGame(n: number): string {
	if (n === 1) return 'Richard';

	let current = n;
	let i = 0;
	while (current > 1) {
		if (Number.isInteger(Math.log2(current))) {
			current = current / 2;
		} else {
			const nearest = Math.floor(Math.log2(current));
			current -= 2 ** nearest;
		}
		++i;
	}

	return i % 2 === 0 ? 'Richard' : 'Louise';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const t: number = parseInt(readLine().trim(), 10);

	for (let tItr: number = 0; tItr < t; tItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		const result: string = counterGame(n);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
