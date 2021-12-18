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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n: string, k: number): number {
	let p = Array.from(n).map((v) => Number(v));
	const x = k * p.reduce((prev, curr) => curr + prev, 0);
	p = Array.from(String(x)).map((v) => Number(v));

	while (p.length > 1) {
		const x = p.reduce((prev, curr) => curr + prev, 0);
		p = Array.from(String(x)).map((v) => Number(v));
	}

	return p[0];
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const n: string = firstMultipleInput[0];

	const k: number = parseInt(firstMultipleInput[1], 10);

	const result: number = superDigit(n, k);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
