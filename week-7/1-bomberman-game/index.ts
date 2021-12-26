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

function flip(grid: string[]): string[] {
	const newGrid: string[] = Array(grid.length).fill('');

	for (let i = 0; i < grid.length; ++i) {
		const currRow = grid[i];
		for (let j = 0; j < currRow.length; j++) {
			if (
				grid[i][j] === 'O' ||
				grid[i][j] === '*' ||
				(i - 1 >= 0 && grid[i - 1][j] === 'O') ||
				(i + 1 < grid.length && grid[i + 1][j] == 'O') ||
				(j - 1 >= 0 && currRow[j - 1] == 'O') ||
				(j + 1 < currRow.length && currRow[j + 1] == 'O')
			) {
				newGrid[i] += '*';
			} else {
				newGrid[i] += '.';
			}
		}
	}

	const flipped: string[] = [];
	for (const row of newGrid) {
		console.log(row);
		flipped.push(row.replace(/\./g, 'O').replace(/\*/g, '.'));
	}

	return flipped;
}

/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n: number, grid: string[]): string[] {
	if (n <= 1) return grid;

	if (n % 2 === 0) return grid.map((s) => 'O'.repeat(s.length));

	const flipped = flip(grid);
	// every third round you get the same grid (sec 3 equal to sec 7 )
	if (n % 4 === 3) return flipped;

	return flip(flipped);
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const r: number = parseInt(firstMultipleInput[0], 10);

	const c: number = parseInt(firstMultipleInput[1], 10);

	const n: number = parseInt(firstMultipleInput[2], 10);

	let grid: string[] = [];

	for (let i: number = 0; i < r; i++) {
		const gridItem: string = readLine();
		grid.push(gridItem);
	}

	const result: string[] = bomberMan(n, grid);

	console.log(result);

	// ws.write(result.join('\n') + '\n');

	// ws.end();
}
