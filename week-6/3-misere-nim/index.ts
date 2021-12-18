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
 * Complete the 'misereNim' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY s as parameter.
 */

function misereNim(s: number[]): string {
	if (Math.max(...s) === 1) return s.length % 2 === 0 ? 'First' : 'Second';

	const res = s.reduce((prev, curr) => prev ^ curr, 0);

	return res !== 0 ? 'First' : 'Second';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const t: number = parseInt(readLine().trim(), 10);

	for (let tItr: number = 0; tItr < t; tItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		const s: number[] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((sTemp) => parseInt(sTemp, 10));

		const result: string = misereNim(s);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
