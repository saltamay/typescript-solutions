/*
Create a Secret Santa list from a .csv file 
with groups of names and corresponding emails.
*/

// Create a .csv file
// Parse the csv file (Can use OOP)
// Create an array of Persons
// Randomly match one half with the other
// while keeping track of matched Persons

import fs from 'fs';
import { Person } from './Person';

const parseCSV = (path: string): string[] => {
	try {
		const data = fs.readFileSync(path, 'utf8');
		return data.split('\r\n').slice(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

const secretMatch = (participants: (Person | null)[]): (Person | null)[][] => {
	const matches = [];
	const middle = participants.length / 2;

	while (matches.length !== participants.length / 2) {
		const left = Math.floor(Math.random() * middle);
		const right = Math.floor(Math.random() * middle) + middle;

		if (participants[left] === null || participants[right] === null) {
			continue;
		}

		matches.push([participants[left], participants[right]]);
		participants[left] = null;
		participants[right] = null;
	}
	return matches;
};

(function () {
	const participants: (Person | null)[] = [];
	const parsedData = parseCSV('./participants.csv');
	parsedData.forEach((person) => {
		const [name, email] = person.split(',');
		participants.push(new Person(name.trim(), email.trim()));
	});
	const matches = secretMatch(participants);
	console.log(matches);
})();
