/*
* CONTROL FLOW:
*
* 0. Control Flow refers to methods of "controlling" which code is executed.
*
* 1. If statements are simple forms of these, determining whether code is executed in
* based on whether a boolean is true or false.
*
* 2. Else-If, else, and switch statments are more complex forms of control flow
* which can do more than two possible flows.
*/
// 1. If Statements //

// If statements use booleans in order to determine whether to executed
// a line of code.

for(var i = 0; i < 10; i++){
	if(Math.random() > 0.5){ // 50% chance of doing this.
		console.log(i);
	}
}

// 2. Else Statements //

// Else Statements are an extension of if statements. Else statements will
// run if all previous if statements are false.
for(var i = 0; i < 10; i++){
	if(Math.random() > 0.5){ // 50% chance of doing this.
		console.log("True");
	}else{
		console.log("False");
	}
}


// 3. Else-If Statments //

// Technically just putting an if statement *within* an else
// statement, but useful enough to pull into their own
// classification. This lets you pull out more than
// two possibilites. An else if statement will only run
// if the previous "if" statements are false AND
// the newly introduced "if" statement is true.

for(var i = 0; i < 20; i++){
	let randomItem = Math.random();
	
	// Each chain has a 20% chance of being activated
	if(randomItem > 0.8){
		console.log("0.8 - 1.0");
	}else if(randomItem > 0.6){
		console.log("0.6 - 0.8");
	}else if(randomItem > 0.4){
		console.log("0.4 - 0.6");
	}else if(randomItem > 0.2){
		console.log("0.2 - 0.4");
	}else{
		console.log("0.0 - 0.2");
	}
}

// This is seperate from a string of if statements, because
// in a string of if statements ALL true statements will run.

for(var i = 0; i < 20; i++){
	let randomItem = Math.random();
	
	// If any of the following statements are true,
	// all following statments are true and all of
	// them are executed.
	if(randomItem > 0.8){
		console.log("0.8 - 1.0");
	}
	if(randomItem > 0.6){
		console.log("0.6 - 0.8");
	}
	if(randomItem > 0.4){
		console.log("0.4 - 0.6");
	}
	if(randomItem > 0.2){
		console.log("0.2 - 0.4");
	}

	console.log("###");
}

// 4. Switch Statements

// Switch statements are similar to an if-else statemnet chain,
// except it requires the variable to be equal to a particular number.

for(var i = 0; i < 20; i++){
	let randomItem = Math.floor(Math.random() * 5);
	
	// Each chain has a 20% chance of being activated
	switch(randomItem){
		case 0:
			console.log("zero");
		case 1:
			console.log("one");
		case 2:
			console.log("two");
		case 3:
			console.log("three");
		case 4:
			console.log("four");
	}
}
