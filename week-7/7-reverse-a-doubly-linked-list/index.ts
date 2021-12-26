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

class DoublyLinkedListNode {
	data: number;
	next: DoublyLinkedListNode | null;
	prev: DoublyLinkedListNode | null;

	constructor(nodeData: number) {
		this.data = nodeData;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	head: DoublyLinkedListNode | null;
	tail: DoublyLinkedListNode | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData: number): void {
		let node = new DoublyLinkedListNode(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail!.next = node;
			node.prev = this.tail;
		}

		this.tail = node;
	}
}

function printDoublyLinkedList(
	node: DoublyLinkedListNode | null,
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
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     number data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(
	llist: DoublyLinkedListNode | null
): DoublyLinkedListNode | null {
	let current = llist;
	let last = null;
	while (current !== null) {
		const next = current.next;
		current.next = last;
		current.prev = next;
		last = current;
		current = next;
	}

	return last;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const t: number = parseInt(readLine().trim(), 10);

	for (let tItr: number = 0; tItr < t; tItr++) {
		let llist: DoublyLinkedList = new DoublyLinkedList();

		const llistCount: number = parseInt(readLine().trim(), 10);

		for (let i: number = 0; i < llistCount; i++) {
			const llistItem: number = parseInt(readLine().trim(), 10);

			llist.insertNode(llistItem);
		}

		const llist1 = reverse(llist.head);

		printDoublyLinkedList(llist1, ' ');
		// ws.write('\n');
	}

	// ws.end();
}
