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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n: number, password: string): number {
	const MIN_LENGTH = 6;

	let min = 0;

	if (!password.match(/^(?=.*\d)/)) {
		console.log('no number');
		++min;
	}

	if (!password.match(/(?=.*[a-z])/)) {
		console.log('no lowercase');
		++min;
	}

	if (!password.match(/(?=.*[A-Z])/)) {
		console.log('no uppercase');
		++min;
	}

	if (!password.match(/[!@#$%\^&*()\-+]/)) {
		console.log('no special');
		++min;
	}

	if (n < MIN_LENGTH) {
		console.log('small');
		min =
			min + n > MIN_LENGTH
				? min
				: Math.min(MIN_LENGTH - n, min + MIN_LENGTH - n);
	}

	return min;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const password: string = readLine();

	const answer: number = minimumNumber(n, password);

	console.log(answer);

	// ws.write(answer + '\n');

	// ws.end();
}
