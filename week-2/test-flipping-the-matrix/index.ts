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
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix: number[][]): number {
	const size = matrix.length;

	let sum = 0;
	// i: column, j: row
	for (let i = 0; i < size / 2; i++) {
		for (let j = 0; j < size / 2; ++j) {
			const currentRow = size - j - 1;
			const currentColumn = size - i - 1;

			// done with a little help from the internet
			// this allows you to compare all 4 points
			// that switch with each other without other loops
			// and conditions
			const max = Math.max(
				matrix[i][j],
				matrix[i][currentRow],
				matrix[currentColumn][j],
				matrix[currentColumn][currentRow]
			);

			sum += max;
		}
	}

	return sum;
}

// 1
// 2
// 112 42 83 119
// 56 125 56 49
// 15 78 101 43
// 62 98 114 108

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const q: number = parseInt(readLine().trim(), 10);

	for (let qItr: number = 0; qItr < q; qItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		let matrix: number[][] = Array(2 * n);

		for (let i: number = 0; i < 2 * n; i++) {
			matrix[i] = readLine()
				.replace(/\s+$/g, '')
				.split(' ')
				.map((matrixTemp) => parseInt(matrixTemp, 10));
		}

		const result: number = flippingMatrix(matrix);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
