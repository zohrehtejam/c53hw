var readlineSync = require("readline-sync");

console.log("How well do you know Rahul ??\n\n");

var userName = readlineSync.question("What's your Name ?\n");

console.log("Hey " + userName + " Welcome to the Quiz!\n\n");

var score = 0;

function quiz(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer === answer) {
		console.log("Yes! You are right");
		score = score + 1;
	} else {
		console.log("Nope!! You are wrong");
		score = score - 1;
	}
}

quiz("Where do I live ?\n", "hoshiarpur");

quiz("\nIn which year I was Born ?\n", "1999");

quiz("\nHow many siblings we are ?\n", "2");

quiz("\nAm I right handed or left handed ?\n", "right handed");

quiz("\nAm I graduated or not ?\n", "graduated");

console.log("\n\nYay!! You Scored " + score);
