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
	inputLines = inputString.split('\n'); // for windows add "\r\n" and for the test on the website
	inputString = '';
	main();
});

function readLine(): string {
	return inputLines[currentLine++];
}

function main() {
	for (const line of inputLines) {
		const parts = line.split(';');
		const indicator = parts[1] as 'M' | 'C' | 'V';
		const name = parts[2];

		switch (parts[0]) {
			case 'S': {
				const newName = split(name, indicator);
				console.log(newName);
				break;
			}
			case 'C': {
				const newName = combine(name, indicator);
				console.log(newName);
				break;
			}
		}
	}
}

function split(str: string, indicator: 'M' | 'C' | 'V') {
	switch (indicator) {
		case 'M':
			return str
				.replace(/[A-Z]/g, (match) => {
					return ` ${match.toLowerCase()}`;
				})
				.replace('()', '');
		case 'C':
			return str.replace(/[A-Z]/g, (match, offset) => {
				return `${offset > 0 ? ' ' : ''}${match.toLowerCase()}`;
			});
		case 'V':
			return str.replace(/[A-Z]/g, (match) => {
				return ` ${match.toLowerCase()}`;
			});
	}
}

function combine(str: string, indicator: 'M' | 'C' | 'V') {
	switch (indicator) {
		case 'M':
			return (
				str.replace(/\s[a-z]/g, (match) => {
					return match.substring(1).toUpperCase();
				}) + '()'
			);
		case 'C':
			return (
				str[0].toLocaleUpperCase() +
				str.substring(1).replace(/\s[a-z]/g, (match) => {
					return match.substring(1).toUpperCase();
				})
			);
		case 'V':
			return str.replace(/\s[a-z]/g, (match) => {
				return match.substring(1).toUpperCase();
			});
	}
}
