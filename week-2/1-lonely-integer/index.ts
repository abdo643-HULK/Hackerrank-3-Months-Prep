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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
	const n = a.length - 1;
	if (!n) return a[0];

	const sortedArr = a.sort((a, b) => a - b);
	const lonely = sortedArr.find((v, i) => {
		if (i === n && v > sortedArr[i - 1]) return true;
		if (sortedArr[i - 1] < v && i + 1 <= n && v < sortedArr[i + 1])
			return true;
		return false;
	});

	return lonely || 0;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const a: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((aTemp) => parseInt(aTemp, 10));

	const result: number = lonelyinteger(a);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
