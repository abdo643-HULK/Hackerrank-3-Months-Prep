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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks: number[]): number[] {
	const n = sticks.length;
	const sortedArr = sticks.sort((a, b) => a - b);
	const m = 3;

	const arr: { sum: number; arr: number[] }[] = [];

	for (let i = 0; i < n; ++i) {
		const part = sortedArr.slice(i, i + m);
		const a = part[0];
		const b = part[1];
		const c = part[2];

		if (a + b > c) {
			arr.push({ sum: a + b + c, arr: [a, b, c] });
		}
	}

	if (arr.length === 0) return [-1];

	return arr.sort((a, b) => b.sum - a.sum)[0].arr;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const sticks: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((sticksTemp) => parseInt(sticksTemp, 10));

	const result: number[] = maximumPerimeterTriangle(sticks);

	console.log(result);

	// ws.write(result.join(' ') + '\n');

	// ws.end();
}
