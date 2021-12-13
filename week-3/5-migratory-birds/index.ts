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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
	const map = new Map<number, number>();

	for (let i = 0; i < arr.length; ++i) {
		if (!map.has(arr[i])) map.set(arr[i], 0);
		map.set(arr[i], (map.get(arr[i]) || 0) + 1);
	}

	console.log(map);

	const highest = Array.from(map)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 2);

	if (highest[0][1] > highest[1][1]) {
		return highest[0][0];
	}

	if (highest[0][1] < highest[1][1]) {
		return highest[1][0];
	}

	return highest[0][0] > highest[1][0] ? highest[1][0] : highest[0][0];
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const arrCount: number = parseInt(readLine().trim(), 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	const result: number = migratoryBirds(arr);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
