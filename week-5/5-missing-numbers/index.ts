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
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr: number[], brr: number[]): number[] {
	arr = arr.sort((a, b) => a - b);
	brr = brr.sort((a, b) => a - b);

	const missing: number[] = [];
	while (brr.length !== 0) {
		const number = brr[0];
		const indexArr = arr.lastIndexOf(number);
		const indexBrr = brr.lastIndexOf(number);

		if (indexArr !== indexBrr) missing.push(brr[indexBrr]);

		arr = arr.slice(indexArr + 1);
		brr = brr.slice(indexBrr + 1);
	}

	return missing.sort((a, b) => a - b);
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	const m: number = parseInt(readLine().trim(), 10);

	const brr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((brrTemp) => parseInt(brrTemp, 10));

	const result: number[] = missingNumbers(arr, brr);

	console.log(result);

	// ws.write(result.join(' ') + '\n');

	// ws.end();
}
