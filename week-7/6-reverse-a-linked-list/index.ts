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

class SinglyLinkedListNode {
	data: number;
	next: SinglyLinkedListNode | null;

	constructor(nodeData: number) {
		this.data = nodeData;
		this.next = null;
	}
}

class SinglyLinkedList {
	head: SinglyLinkedListNode | null;
	tail: SinglyLinkedListNode | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData: number): void {
		const node = new SinglyLinkedListNode(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail!.next = node;
		}

		this.tail = node;
	}
}

function printSinglyLinkedList(
	node: SinglyLinkedListNode | null,
	sep: string
): void {
	while (node != null) {
		process.stdout.write(String(node.data));

		node = node.next;

		if (node != null) {
			process.stdout.write(sep);
		}
	}
	process.stdout.write('\n');
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     number data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(
	llist: SinglyLinkedListNode | null
): SinglyLinkedListNode | null {
	let current = llist;
	let last = null;
	while (current !== null) {
		const next = current.next;
		current.next = last;
		last = current;
		current = next;
	}

	return last;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const tests: number = parseInt(readLine().trim(), 10);

	for (let testsItr: number = 0; testsItr < tests; testsItr++) {
		let llist: SinglyLinkedList = new SinglyLinkedList();

		const llistCount: number = parseInt(readLine().trim(), 10);

		for (let i: number = 0; i < llistCount; i++) {
			const llistItem: number = parseInt(readLine().trim(), 10);

			llist.insertNode(llistItem);
		}

		const llist1 = reverse(llist.head);

		printSinglyLinkedList(llist1, ' ');
		// ws.write('\n');
	}

	// ws.end();
}
