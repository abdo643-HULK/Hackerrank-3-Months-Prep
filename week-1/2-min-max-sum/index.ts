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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
	const sortedArr = arr.sort();
	const n = sortedArr.length - 1;

	const max =
		sortedArr[n - 3] + sortedArr[n - 2] + sortedArr[n - 1] + sortedArr[n];
	const min = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];

	console.log(min + ' ' + max);
}

function main() {
	const arr: number[] = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	miniMaxSum(arr);
}
