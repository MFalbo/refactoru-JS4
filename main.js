// First Solution Iteration

var numVictims;

while(isNaN(numVictims)){

numVictims = prompt("How many disaster victims do you have? ");

if(isNaN(numVictims)){
	alert("Please use numerals.");
}

!isNaN(+numVictims);
}

// console.log(numVictims);

// Retrieve and Store Victim Information

// Declare empty victim arrays
	var vicNameArray = [];
	var vicPhoneNumberArray = [];
	var vicStreetArray = [];

for(var i=1; i<=numVictims; i++){

	// console.log(i);

	var vicName = prompt("Name of victim #" + i);
	vicNameArray.push(vicName)

	var vicPhoneNumber = prompt("Phone number of victim #" + i);
	vicPhoneNumberArray.push(vicPhoneNumber)

	var vicStreet = prompt("Street of victim #" + i);
	vicStreetArray.push(vicStreet)
}

// console.log(vicNameArray);
// console.log(vicPhoneNumberArray);
// console.log(vicStreetArray);