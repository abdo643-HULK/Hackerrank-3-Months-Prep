'use strict';

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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr: string[][]): void {
	const list: string[][] = Array.from({ length: arr.length / 2 }, (_) => []);

	const firstHalf = arr.slice(0, arr.length / 2);
	const secondHalf = arr.slice(arr.length / 2);

	for (const pair of firstHalf) {
		const index = Number(pair[0]);
		list[index].push('-');
	}

	for (const pair of secondHalf) {
		const index = Number(pair[0]);
		const str = pair[1];

		list[index].push(str);
	}

	console.log(list.flat().join(' '));
}

function main() {
	const n: number = parseInt(readLine().trim(), 10);

	let arr: string[][] = Array(n);

	for (let i: number = 0; i < n; i++) {
		arr[i] = readLine().replace(/\s+$/g, '').split(' ');
	}

	countSort(arr);
}
