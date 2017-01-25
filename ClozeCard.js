/*jslint node: true */
'use strict';

// This is a constructor named ClozeCard. It takes two arguements, text, and cloze.
function ClozeCard (text, cloze){
	// Here, we are writing an if statement to protect the user from itself, and from poor codewriters. If the syntax written is not instantiating a new ClozeCard, but redefining ClozeCard, then to instantiate it instead.
	if(!(this instanceof ClozeCard)){
		return new ClozeCard (text, cloze);
	}

	this.text = text;
	this.cloze = cloze;
}