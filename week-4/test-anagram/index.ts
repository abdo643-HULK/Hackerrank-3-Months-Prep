'use strict';

import * as assert from 'assert';
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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s: string): number {
	if (s.length % 2 !== 0) return -1;

	// const s1 = Array.from(s.slice(0, s.length / 2)).sort(
	// 	(a, b) => a.charCodeAt(0) - b.charCodeAt(0)
	// );

	// const s2 = Array.from(s.slice(s.length / 2)).sort(
	// 	(a, b) => a.charCodeAt(0) - b.charCodeAt(0)
	// );

	const s1 = s.slice(0, s.length / 2);
	let s2 = s.slice(s.length / 2);

	let count = 0;
	for (let i = 0; i < s1.length; ++i) {
		const char = s1[i];

		if (!s2.includes(char)) {
			++count;
			continue;
		}

		s2 = s2.replace(char, '');
		// s2.splice(i, 1);
	}

	return count;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const q: number = parseInt(readLine().trim(), 10);

	for (let qItr: number = 0; qItr < q; qItr++) {
		const s: string = readLine();

		const result: number = anagram(s);

		console.log(result);
		// assert.equal(result, res[qItr]);

		// ws.write(result + '\n');
	}

	// ws.end();
}

const res = [
	197, 219, 201, 227, 192, 226, 199, 228, 175, 188, 142, 212, 191, 204, 228,
	139, 147, 205, 206, 245, 227, 196, 197, 181, 210, 158, 208, 185, 197, 151,
	141, 163, 191, 165, 263, 209, 196, 182, 215, 174, 232, 242, 172, 162, 191,
	174, 206, 199, 158, 197, 195, 242, 168, 175, 219, 185, 243, 270, 181, 179,
	207, 170, 189, 188, 251, 228, 195, 245, 161, 238, 227, 205, 183, 155, 192,
	228, 207, 186, 219, 197, 209, 261, 210, 177, 188, 186, 193, 180, 236, 199,
	205, 186, 217, 230, 207, 140, 188, 187, 170, 171,
];
