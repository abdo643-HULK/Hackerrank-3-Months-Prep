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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// 2 3
// 2 4
// 16 32 96
// Output 3
function getTotalX(a: number[], b: number[]): number {
	a = a.sort((a, b) => a - b);
	b = b.sort((a, b) => a - b);

	const maxFaktorial = a[a.length - 1];
	const minMultilplicator = b[0];

	let inBetweens = 1;
	for (let i = maxFaktorial; i < minMultilplicator; ++i) {
		if (a.every((x) => i % x === 0) && b.every((x) => x % i === 0)) {
			++inBetweens;
		}
	}

	return inBetweens;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const n: number = parseInt(firstMultipleInput[0], 10);

	const m: number = parseInt(firstMultipleInput[1], 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	const brr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((brrTemp) => parseInt(brrTemp, 10));

	const total: number = getTotalX(arr, brr);

	console.log(total);

	// ws.write(total + '\n');

	// ws.end();
}
