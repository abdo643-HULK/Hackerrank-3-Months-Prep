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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a: number[]): number {
	a = a.sort((a, b) => a - b);

	const map: number[][] = [];
	for (let i = 0; i < a.length; ) {
		const num = a[i];
		const found = a.lastIndexOf(num + 1);
		const lastIndex = found !== -1 ? found : a.lastIndexOf(num);
		map.push(a.slice(i, lastIndex + 1));
		i = lastIndex + 1;
	}

	console.log(map);

	const sortedMap = map.sort((a, b) => b.length - a.length);

	return sortedMap[0].length;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const a: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((aTemp) => parseInt(aTemp, 10));

	const result: number = pickingNumbers(a);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
