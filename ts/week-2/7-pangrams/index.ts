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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s: string): string {
	const alphabetArray: number[] = Array(90 - 64).fill(0);
	const upper = s.toUpperCase();

	for (let i = 0; i < upper.length; ++i) {
		const letter = upper[i];
		const code = letter.charCodeAt(0);
		if (code < 65 || code > 90) continue;
		++alphabetArray[code - 65];
	}

	// Hackerranks doesn't support es5
	// for (const letter of upper) {
	// 	const code = letter.charCodeAt(0);
	// 	if (code < 65 || code > 90) continue;
	// 	++alphabetArray[code - 65];
	// }

	return alphabetArray.find((v) => v === 0) === undefined
		? 'pangram'
		: 'not pangram';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const s: string = readLine();

	const result: string = pangrams(s);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
