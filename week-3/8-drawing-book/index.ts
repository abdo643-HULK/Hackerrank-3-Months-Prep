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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

// not the best solution but like people say: if it ain't
// broke don't fix it.
function pageCount(n: number, p: number): number {
	if (p === 1) return 0;
	if (n % p === 1 && p % 2 !== 0) return 1;
	if (n % p === 1 && p % 2 === 0) return 0;
	if (n % p === 0 && n === p) return 0;

	let frontCnt = 1;
	let backCnt = 1;

	console.log('in loop');

	for (let i = 2; i < n - 2; i += 2) {
		if (p === i || p === i + 1) break;
		if (p === n - i || p === n - i - 1) break;
		++frontCnt;
		++backCnt;
	}

	return Math.min(frontCnt, backCnt);
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const p: number = parseInt(readLine().trim(), 10);

	const result: number = pageCount(n, p);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
