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
 * Complete the 'pylons' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

/**
 * The first solution mapping all the indecies of the ones and
 * -1 for the zeros and than filtering all the indecies and than
 * comparing and calculating the distance that had to be covered. I wasn't happy
 * because it was using way more loops and branches than I first thought,
 * I was thinking it would be better the current way
 */
function pylons(k: number, arr: number[]): number {
	// we want to find the first plant that is the closest to the k
	const firstPlantIndex = arr.slice(0, k).lastIndexOf(1);
	if (firstPlantIndex >= k || firstPlantIndex === -1) return -1;

	let minimumAmount = 1;
	let plantPosition = firstPlantIndex;

	while (plantPosition < arr.length - k) {
		let canNotBeCovered = true;

		const area = 2 * (k - 1) + 1;
		plantPosition += area;

		for (let i = 0; i < area; i++) {
			const curr = arr[Math.min(plantPosition - i, arr.length - 1)];
			if (curr === 0) continue;
			plantPosition -= i;
			++minimumAmount;
			canNotBeCovered = false;
			break;
		}

		if (canNotBeCovered) return -1;
	}

	return minimumAmount;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const firstMultipleInput: string[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ');

	const n: number = parseInt(firstMultipleInput[0], 10);

	const k: number = parseInt(firstMultipleInput[1], 10);

	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	const result: number = pylons(k, arr);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
