// // First Solution Iteration

// var numVictims;

// while(isNaN(numVictims)){

// numVictims = prompt("How many disaster victims do you have? ");

// if(isNaN(numVictims)){
// 	alert("Please use numerals.");
// }

// !isNaN(+numVictims);
// }

// // console.log(numVictims);

// // Retrieve and Store Victim Information

// // Declare empty victim arrays
// 	var vicNameArray = [];
// 	var vicPhoneNumberArray = [];
// 	var vicStreetArray = [];

// for(var i=1; i<=numVictims; i++){

// 	// console.log(i);

// 	var vicName = prompt("Name of victim #" + i);
// 	vicNameArray.push(vicName)

// 	var vicPhoneNumber = prompt("Phone number of victim #" + i);
// 	vicPhoneNumberArray.push(vicPhoneNumber)

// 	var vicStreet = prompt("Street of victim #" + i);
// 	vicStreetArray.push(vicStreet)
// }

// // console.log(vicNameArray);
// // console.log(vicPhoneNumberArray);
// // console.log(vicStreetArray);

// var numVolunteers;

// while(isNaN(numVolunteers)){

// numVolunteers = prompt("How many disaster volunteers do you have? ");

// if(isNaN(numVolunteers)){
// 	alert("Please use numerals.");
// }

// !isNaN(+numVolunteers);
// }

// // console.log(numVolunteers);

// // Retrieve and Store Volunteer Information

// // Declare empty volunteer arrays
// 	var volNameArray = [];
// 	var volPhoneNumberArray = [];
// 	var volStreetArray = [];

// for(var i=1; i<=numVolunteers; i++){

// 	// console.log(i);

// 	var volName = prompt("Name of volunteer #" + i);
// 	volNameArray.push(volName)

// 	var volPhoneNumber = prompt("Phone number of volunteer #" + i);
// 	volPhoneNumberArray.push(volPhoneNumber)

// 	var volStreet = prompt("Street of volunteer #" + i);
// 	volStreetArray.push(volStreet)
// }

// // console.log(volNameArray);
// // console.log(volPhoneNumberArray);
// // console.log(volStreetArray);

// alert("There are " + numVictims + " victims.\n"
// 	+ "There are " + numVolunteers + " volunteers.\n"
// 	+ "Victim #1: " + vicNameArray[0] + " " + vicPhoneNumberArray[0] + " " + vicStreetArray[0] + "\n"
// 	+ "Victim #2: " + vicNameArray[1] + " " + vicPhoneNumberArray[1] + " " + vicStreetArray[1] + "\n"
// 	+ "Volunteer #1: " + volNameArray[0] + " " + volPhoneNumberArray[0] + " " + volStreetArray[0] + "\n"
// 	+ "Volunteer #2: " + volNameArray[1] + " " + volPhoneNumberArray[1] + " " + volStreetArray[1] + "\n");



// ------------------------------------------SOLUTION USING OBJECTS-----------------------------------------

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
	var victimArray = [];

for(var i=1; i<=numVictims; i++){

	// console.log(i);

	var victim = {};

	victim.Name = prompt("Name of victim #" + i);
	victim.PhoneNumber = prompt("Phone number of victim #" + i);
	victim.Street = prompt("Street of victim #" + i);
	
	// console.log(victim);

	victimArray.push(victim);
}

// console.log(victimArray[0]);
// console.log(victimArray[1]);

var numVolunteers;

while(isNaN(numVolunteers)){

numVolunteers = prompt("How many disaster volunteers do you have? ");

if(isNaN(numVolunteers)){
	alert("Please use numerals.");
}

!isNaN(+numVolunteers);
}

// console.log(numVolunteers);

// Retrieve and Store Volunteer Information

// Declare empty volunteer arrays
	var volunteerArray = [];

for(var i=1; i<=numVolunteers; i++){

	// console.log(i);

	var volunteer = {};

	volunteer.Name = prompt("Name of volunteer #" + i);
	volunteer.PhoneNumber = prompt("Phone number of volunteer #" + i);
	volunteer.Street = prompt("Street of volunteer #" + i);
	
	// console.log(volunteer);

	volunteerArray.push(volunteer);
}

// console.log(volunteerArray[0]);
// console.log(volunteerArray[1]);

alert("There are " + numVictims + " victims.\n"
	+ "There are " + numVolunteers + " volunteers.\n"
	+ "Victim #1: " + victimArray[0].Name + " " + victimArray[0].PhoneNumber + " " + victimArray[0].Street + "\n"
	+ "Victim #2: " + victimArray[1].Name + " " + victimArray[1].PhoneNumber + " " + victimArray[1].Street + "\n"
	+ "Volunteer #1: " + volunteerArray[0].Name + " " + volunteerArray[0].PhoneNumber + " " + volunteerArray[0].Street + "\n"
	+ "Volunteer #2: " + volunteerArray[1].Name + " " + volunteerArray[1].PhoneNumber + " " + volunteerArray[1].Street + "\n");


