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
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function gamingArray(arr: number[]): string {
	let i = 0;

	let max = Number.MAX_SAFE_INTEGER;
	for (const val of arr) {
		if (val <= max) continue;
		max = val;
		++i;
	}

	// Exeeded the time for 3 tests
	// while (arr.length !== 0) {
	// 	const max = Math.max(...arr);
	// 	const index = arr.findIndex((val) => max === val);
	// 	arr.length = index || 0;
	// 	++i;
	// }

	return i % 2 === 0 ? 'ANDY' : 'BOB';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const g: number = parseInt(readLine().trim(), 10);

	for (let gItr: number = 0; gItr < g; gItr++) {
		const arrCount: number = parseInt(readLine().trim(), 10);

		const arr: number[] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));

		const result: string = gamingArray(arr);

		console.log(gItr + 1 + ': ' + result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
