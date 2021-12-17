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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr: number[]): number[] {
	arr = arr.sort((a, b) => a - b);

	let minDiff = Number.MAX_VALUE;
	for (let i = 0; i < arr.length - 1; ++i) {
		const pair = arr.slice(i, i + 2);
		const diff = pair[1] - pair[0];
		if (diff < minDiff) minDiff = diff;
	}

	const pairs: number[][] = [];
	for (let i = 0; i < arr.length - 1; ++i) {
		const pair = arr.slice(i, i + 2);
		const diff = pair[1] - pair[0];
		if (diff === minDiff) pairs.push(pair);
	}

	return pairs.flat();
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	const result: number[] = closestNumbers(arr);

	console.log(result);

	// ws.write(result.join(' ') + '\n');

	// ws.end();
}
