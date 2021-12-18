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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr: number[]): string {
	const sum = arr.reduce((prev, curr) => prev + curr, 0);

	let leftSideSum = 0;
	for (const element of arr) {
		const rightSideSum = sum - leftSideSum - element;
		if (leftSideSum === rightSideSum) return 'YES';
		leftSideSum += element;
	}

	return 'NO';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const T: number = parseInt(readLine().trim(), 10);

	for (let TItr: number = 0; TItr < T; TItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		const arr: number[] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));

		const result: string = balancedSums(arr);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
