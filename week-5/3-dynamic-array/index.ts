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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n: number, queries: number[][]): number[] {
	const arr: number[][] = Array.from({ length: n }, (_) => Array(0));
	const lastAnswers = [];

	let lastAnswer = 0;
	for (const query of queries) {
		const queryType = query[0] as 1 | 2;
		const x = query[1];
		const y = query[2];

		const idx = (x ^ lastAnswer) % n;

		switch (queryType) {
			case 1:
				arr[idx].push(y);
				break;
			case 2:
				lastAnswer = arr[idx][y % arr[idx].length];
				lastAnswers.push(lastAnswer);
				break;
		}
	}

	return lastAnswers;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const n: number = parseInt(firstMultipleInput[0], 10);

	const q: number = parseInt(firstMultipleInput[1], 10);

	let queries: number[][] = Array(q);

	for (let i: number = 0; i < q; i++) {
		queries[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((queriesTemp) => parseInt(queriesTemp, 10));
	}

	const result: number[] = dynamicArray(n, queries);

	console.log(result);

	// ws.write(result.join('\n') + '\n');

	// ws.end();
}
