/*jslint node: true */
'use strict';

// This is a constructor named ClozeCard. It takes two arguements, text, and cloze.
function ClozeCard (text, cloze){
	// Here, we are writing an if statement to protect the user from itself, and from poor codewriters. If the syntax written is not instantiating a new ClozeCard, but redefining ClozeCard, then to instantiate it instead.
	if(!(this instanceof ClozeCard)){
		return new ClozeCard (text, cloze);
	}

	// This sets the value of this for the text.
	this.text = text;
	// This sets the value of this for the cloze.
	this.cloze = cloze;




	// ********Instead of all that crap above, look at the three lines beneath.


	// Here, we are going to create a method that allows the user to enter the answer in any point during the question, instead of making them enter it at either the beginning or the end. It will take out the answer from the statement string using the replace method, and replace it with "...". It will then return both values to show that we are able to grab either sets of data and show it to the user at request.
	var replace = this.text.replace(this.cloze, "...");

	console.log(replace);
	console.log(this.text);

}


var benjaminFranklin = new ClozeCard ("Benjamin Franklin is on the 100 dollar bill.", "Benjamin Franklin");

var captainAmerica = new ClozeCard ("The Red Mask was defeated by Captain America during World War 2", "Captain America");

var anthonyMyhre = new ClozeCard ("It is very sad that Anthony Myhre still wets the bed.", "Anthony Myhre");


