/*jslint node: true */
'use strict';


// This is a constructor named BasicCard. It takes two arguements, front and back.
function BasicCard (front, back){
	// Here, we are writing an if statement to protect the user from itself, and from poor codewriters. If the syntax written is not instantiating a new BasicCard, but redefining BasicCard, then to instantiate it instead.
	if(!(this instanceof BasicCard)){
		return new BasicCard (front, back);
	}

	this.front = front;
	this.back = back;
}
