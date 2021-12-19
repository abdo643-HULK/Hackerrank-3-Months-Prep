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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s: string): number {
	const reversed = Array.from(s).reverse().join('');

	if (s === reversed) return -1;

	const i = Array.from(s).findIndex((val, idx) => val !== reversed[idx]) + 1;
	const j = s.length - i;

	let a = i;
	let b = j;
	while (a < j && b > i) {
		if (s[a] !== s[b]) return j;
		++a;
		--b;
	}

	return i - 1;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const q: number = parseInt(readLine().trim(), 10);

	for (let qItr: number = 0; qItr < q; qItr++) {
		const s: string = readLine();

		const result: number = palindromeIndex(s);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
