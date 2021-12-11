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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
	const temp = Number(s.slice(0, 2));
	const hour = temp === 12 ? 0 : temp;

	const dayTime = s.slice(s.length - 2, s.length);
	const restTime = s.substring(2, s.length - 2);

	if (dayTime === 'PM') return `${hour + 12}${restTime}`;

	const time = hour > 9 ? hour : '0' + hour;
	return `${time}${restTime}`;
}

function main() {
	const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const s: string = readLine();

	const result: string = timeConversion(s);

	ws.write(result + '\n');

	ws.end();
}

main();
