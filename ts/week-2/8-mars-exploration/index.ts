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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s: string): number {
	let errors = 0;

	for (let i = 0; i < s.length; i += 3) {
		const part = s.slice(i, i + 3);
		if (part.match('SOS')) continue;

		part[0] !== 'S' && ++errors;
		part[1] !== 'O' && ++errors;
		part[2] !== 'S' && ++errors;
	}

	return errors;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const s: string = readLine();

	const result: number = marsExploration(s);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
