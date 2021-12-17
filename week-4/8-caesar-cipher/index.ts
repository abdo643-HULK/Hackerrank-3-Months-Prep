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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
	return Array.from(s)
		.map((char) => {
			const code = char.charCodeAt(0);
			if (k > 26) k = k % 26;
			if (code >= 65 && code <= 90) {
				return code + k > 90 ? k - (90 - code) + 64 : code + k;
			}

			if (code >= 97 && code <= 122) {
				return code + k > 122 ? k - (122 - code) + 96 : code + k;
			}

			return code;
		})
		.map((code) => String.fromCharCode(code))
		.reduce((a, b) => a + b, '');
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const s: string = readLine();

	const k: number = parseInt(readLine().trim(), 10);

	const result: string = caesarCipher(s, k);

	console.log(result);

	// 	38
	// Always-Look-on-the-Bright-Side-of-Life
	// 5
	// assert.equal('Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj', result);

	assert.equal(
		'1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N',
		result
	);

	// ws.write(result + '\n');

	// ws.end();
}
