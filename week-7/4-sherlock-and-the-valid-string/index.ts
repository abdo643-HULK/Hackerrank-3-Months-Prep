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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// really bad solution but it works
function isValid(s: string): string {
	const accurances = new Map<string, number>();

	for (const char of s) {
		accurances.set(char, (accurances.get(char) || 0) + 1);
	}

	const accurancesArray = [...accurances].sort((a, b) => a[1] - b[1]);

	const idx = Math.floor(accurancesArray.length / 2 - 1);

	let keyAppearances = accurancesArray[Math.max(0, idx)][1];

	if (accurancesArray.length > 2) {
		keyAppearances =
			accurancesArray[0][1] === accurancesArray[1][1]
				? accurancesArray[0][1]
				: accurancesArray[1][1] === accurancesArray[2][1]
				? accurancesArray[1][1]
				: accurancesArray[1][1];
	}

	const isValid = accurancesArray.every((val) => val[1] === keyAppearances);

	if (isValid) return 'YES';

	const wrongAmountIndex = accurancesArray.findIndex(
		(val) => val[1] !== keyAppearances
	);

	keyAppearances - accurancesArray[wrongAmountIndex][1] === 1
		? ++accurancesArray[wrongAmountIndex][1]
		: --accurancesArray[wrongAmountIndex][1];

	// new block scope
	{
		const isValid = accurancesArray.every(
			(val) => val[1] === keyAppearances || val[1] === 0
		);
		if (isValid) return 'YES';
	}

	return 'NO';
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const s: string = readLine();

	const result: string = isValid(s);

	console.log(result);

	// ws.write(result + '\n');

	// ws.end();
}
