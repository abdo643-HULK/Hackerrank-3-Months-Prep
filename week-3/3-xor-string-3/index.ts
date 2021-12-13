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

function stringsXor(s: string, t: string): string {
	let res = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] == t[i]) res += '0';
		else res += '1';
	}

	return res;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const s = readLine().trim();
	const t = readLine().trim();

	const result: string = stringsXor(s, t);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
