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
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(
	llist: SinglyLinkedListNode | null,
	data: number,
	position: number
): SinglyLinkedListNode {
	let current = llist;

	const node = new SinglyLinkedListNode(data);

	for (let i = 0; i < position - 1; i++) {
		current = current?.next ?? null;
	}

	const next = current?.next;
	if (current !== null) {
		current.next = node;
		node.next = next ?? null;
	}

	return llist as SinglyLinkedListNode;
}

function main() {
	// const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	let llist: SinglyLinkedList = new SinglyLinkedList();

	const llistCount: number = parseInt(readLine().trim(), 10);

	for (let i: number = 0; i < llistCount; i++) {
		const llistItem: number = parseInt(readLine().trim(), 10);

		llist.insertNode(llistItem);
	}

	const data: number = parseInt(readLine().trim(), 10);

	const position: number = parseInt(readLine().trim(), 10);

	const llist_head = insertNodeAtPosition(llist.head, data, position);

	printSinglyLinkedList(llist_head, ' ');
	// ws.write('\n');

	// ws.end();
}
