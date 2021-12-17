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
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function maxMin(k: number, arr: number[]): number {
	arr = arr.sort((a, b) => a - b);

	let unfairness = Number.MAX_VALUE;
	for (let i = 0; i <= arr.length - k; ++i) {
		// const slice = arr.slice(i, i + k);
		// const current = slice[k - 1] - slice[0];
		const current = arr[i + k - 1] - arr[i];
		if (current < unfairness) unfairness = current;
	}

	return unfairness;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const k: number = parseInt(readLine().trim(), 10);

	let arr: number[] = [];

	for (let i: number = 0; i < n; i++) {
		const arrItem: number = parseInt(readLine().trim(), 10);

		arr.push(arrItem);
	}

	const result: number = maxMin(k, arr);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
