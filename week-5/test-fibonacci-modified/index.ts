'use strict';

import { strict as assert } from 'assert';
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
 * Complete the 'fibonacciModified' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER t1
 *  2. INTEGER t2
 *  3. INTEGER n
 */
function fibonacciModified(t1: number, t2: number, n: number): BigInt {
	let bigT2 = BigInt(t2);
	let last = BigInt(t1) + bigT2 ** 2n;

	for (let i = 0; i < n - 3; i++) {
		let temp = last;
		last = bigT2 + last ** 2n;
		bigT2 = temp;
	}

	return last;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const t1: number = parseInt(firstMultipleInput[0], 10);

	const t2: number = parseInt(firstMultipleInput[1], 10);

	const n: number = parseInt(firstMultipleInput[2], 10);

	const result: BigInt = fibonacciModified(t1, t2, n);

	assert.equal(84266613096281243382112, result);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
