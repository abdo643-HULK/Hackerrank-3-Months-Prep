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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
// Read:
// https://mindyourdecisions.com/blog/2015/11/08/how-many-3x3-magic-squares-are-there-sunday-puzzle/
function formingMagicSquare(s: number[][]): number {
	const possibilities = [
		[
			[8, 1, 6],
			[3, 5, 7],
			[4, 9, 2],
		],
		[
			[6, 1, 8],
			[7, 5, 3],
			[2, 9, 4],
		],
		[
			[4, 9, 2],
			[3, 5, 7],
			[8, 1, 6],
		],
		[
			[2, 9, 4],
			[7, 5, 3],
			[6, 1, 8],
		],
		[
			[8, 3, 4],
			[1, 5, 9],
			[6, 7, 2],
		],
		[
			[4, 3, 8],
			[9, 5, 1],
			[2, 7, 6],
		],
		[
			[6, 7, 2],
			[1, 5, 9],
			[8, 3, 4],
		],
		[
			[2, 7, 6],
			[9, 5, 1],
			[4, 3, 8],
		],
	];

	let cost = Number.MAX_SAFE_INTEGER;
	for (const possibility of possibilities) {
		let currCost = 0;
		for (let i = 0; i < possibility.length; i++) {
			for (let j = 0; j < 3; j++) {
				currCost += Math.abs(possibility[i][j] - s[i][j]);
			}
		}
		cost = Math.min(currCost, cost);
	}

	return cost;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	let s: number[][] = Array(3);

	for (let i: number = 0; i < 3; i++) {
		s[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((sTemp) => parseInt(sTemp, 10));
	}

	const result: number = formingMagicSquare(s);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
