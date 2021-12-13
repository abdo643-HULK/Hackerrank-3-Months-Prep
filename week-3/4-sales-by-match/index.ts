'use strict';

import { WriteStream, createWriteStream } from 'fs';
import { arrayBuffer } from 'stream/consumers';
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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
	const map = new Map<number, number>();

	for (let i = 0; i < n; ++i) {
		if (!map.has(ar[i])) map.set(ar[i], 0);
		map.set(ar[i], (map.get(ar[i]) || 0) + 1);
	}

	let pairs = 0;
	for (const pair of map.values()) {
		if (pair % 2 === 0 || pair > 1) pairs += Math.floor(pair / 2);
	}

	return pairs;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	const ar: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arTemp) => parseInt(arTemp, 10));

	const result: number = sockMerchant(n, ar);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
