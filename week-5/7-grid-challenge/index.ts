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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid: string[]): string {
	const gridArr = grid
		.map((g) => Array.from(g))
		.map((val) => val.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)));

	for (let i = 0; i < gridArr[0].length; ++i) {
		for (let j = 1; j < grid.length; ++j) {
			const previous = gridArr[j - 1][i];
			const current = gridArr[j][i];
			if (current < previous) return 'NO';
		}
	}

	return 'YES';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const t: number = parseInt(readLine().trim(), 10);

	for (let tItr: number = 0; tItr < t; tItr++) {
		const n: number = parseInt(readLine().trim(), 10);

		let grid: string[] = [];

		for (let i: number = 0; i < n; i++) {
			const gridItem: string = readLine();
			grid.push(gridItem);
		}

		const result: string = gridChallenge(grid);

		console.log(result);

		// ws.write(result + '\n');
	}

	// ws.end();
}
