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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
	let sum1 = 0;
	for (let i = 0, j = 0; i < arr.length; ++i, ++j) {
		sum1 += arr[i][j];
	}

	let sum2 = 0;
	for (let i = arr.length - 1, j = 0; j < arr.length; --i, ++j) {
		sum2 += arr[i][j];
	}

	return Math.abs(sum1 - sum2);
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	let arr: number[][] = Array(n);

	for (let i: number = 0; i < n; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}

	const result: number = diagonalDifference(arr);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
