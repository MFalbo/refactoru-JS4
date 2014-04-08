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
// 	var victimArray = [];

// for(var i=1; i<=numVictims; i++){

// 	// console.log(i);

// 	var victim = {};

// 	victim.Name = prompt("Name of victim #" + i);
// 	victim["Phone Number"] = prompt("Phone number of victim #" + i);
// 	victim.Street = prompt("Street of victim #" + i);
	
// 	// console.log(victim);

// 	victimArray.push(victim);
// }

// // console.log(victimArray[0]);
// // console.log(victimArray[1]);

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
// 	var volunteerArray = [];

// for(var i=1; i<=numVolunteers; i++){

// 	// console.log(i);

// 	var volunteer = {};

// 	volunteer.Name = prompt("Name of volunteer #" + i);
// 	volunteer["Phone Number"] = prompt("Phone number of volunteer #" + i);
// 	volunteer.Street = prompt("Street of volunteer #" + i);
	
// 	// console.log(volunteer);

// 	volunteerArray.push(volunteer);
// }

// // console.log(volunteerArray[0]);
// // console.log(volunteerArray[1]);

// var summaryMessage = "There are " + numVictims + " victims.\n"
// 							+ "There are " + numVolunteers + " volunteers.\n";

// for(var i=0; i<numVictims; i++){

// 	summaryMessage += "Victim #" + (i+1) + ": \n";

// 		for(key in victimArray[i]){
// 			summaryMessage += "   " + key + ": " + victimArray[i][key] + "\n";
// 		}
	
// }
// for(var i=0; i<numVolunteers; i++){

// 	summaryMessage += "Victim #" + (i+1) + ": \n";

// 		for(key in volunteerArray[i]){
// 			summaryMessage += "   " + key + ": " + volunteerArray[i][key] + "\n";
// 		}
// }

// alert(summaryMessage);


// -----------------------SOLUTION WITHOUT PREDETERMINED NUMBER OF VICTIMS OR VOLUNTEERS-------------------

// var moreVictims = confirm("Do you have disaster VICTIM info to enter? ");
// var victimArray = [];
// var victimCount = 0;

// // console.log(moreVictims);

// while(moreVictims){

// 	victimCount++;

// 	// console.log(victimCount);

// 	var victim = {};

// 	victim.Name = prompt("Name of victim #" + victimCount);
// 	victim["Phone Number"] = prompt("Phone number of victim #" + victimCount);
// 	victim.Street = prompt("Street of victim #" + victimCount);
	
// 	// console.log(victim);

// 	victimArray.push(victim);

// 	moreVictims = confirm("Do you have info for another victim? ");
// }

// // console.log(victimArray);

// var moreVolunteers = confirm("Do you have disaster VOLUNTEER info to enter? ");
// var volunteerArray = [];
// var volunteerCount = 0;

// while(moreVolunteers){

// 	volunteerCount++;

// 	// console.log(victimCount);

// 	var volunteer = {};

// 	volunteer.Name = prompt("Name of volunteer #" + volunteerCount);
// 	volunteer["Phone Number"] = prompt("Phone number of volunteer #" + volunteerCount);
// 	volunteer.Street = prompt("Street of volunteer #" + volunteerCount);
	
// 	// console.log(volunteer);

// 	volunteerArray.push(volunteer);

// 	moreVolunteers = confirm("Do you have info for another volunteer? ");
// }

// // console.log(volunteerArray);

// var summaryMessage = "There are " + victimCount + " victims.\n"
// 							+ "There are " + volunteerCount + " volunteers.\n";

// for(var i=0; i<victimCount; i++){

// 	summaryMessage += "Victim #" + (i+1) + ": \n";

// 		for(key in victimArray[i]){
// 			summaryMessage += "   " + key + ": " + victimArray[i][key] + "\n";
// 		}
	
// }
// for(var i=0; i<volunteerCount; i++){

// 	summaryMessage += "Volunteer #" + (i+1) + ": \n";

// 		for(key in volunteerArray[i]){
// 			summaryMessage += "   " + key + ": " + volunteerArray[i][key] + "\n";
// 		}
// }

// alert(summaryMessage);

// var personInNeed = prompt("Enter the name of a person in need. ");
// var volunteersAvail = [];
// var responderMessage = "The following volunteers are available on your victim's street: \n";

// for(var i=0; i<victimCount; i++){
// 			// console.log("In for loop 1");
// 	if(personInNeed === victimArray[i]["Name"]){
// 			// console.log("In if statement 1");
// 		var streetInNeed = victimArray[i]["Street"];
// 			// console.log(victimArray[i]["Street"]);
	
// 		for(var i=0; i<volunteerCount; i++){
// 				// console.log("In for loop 2");
// 				// console.log(volunteerArray[i]["Street"]);
// 			if(streetInNeed === volunteerArray[i]["Street"]){
// 				// console.log("In for loop 2");
// 				// console.log(volunteerArray[i]["Name"]);

// 				responderMessage += "   " + volunteerArray[i]["Name"] + "\n";
// 			}
// 			else{
// 				responderMessage += "No volunteers available on " + victimArray[i]["Name"] + "'s street."; 
// 			}
// 		}

// 	}

// }

// alert(responderMessage);


// -----------------------------------Solution Refactored using functions-------------------------------


var moreVictims = confirm("Do you have disaster VICTIM info to enter? ");
var victimArray = [];
var victimCount = 0;


function personCreator(count, type){
	var person = {};

	person.Name = prompt("Name of " + type + "#" + count);
	person["Phone Number"] = prompt("Phone number of " + type + "#" + count);
	person.Street = prompt("Street of " + type + "#" + count);

	return person;
}

while(moreVictims){

	victimCount++;

	
	currentVictim = personCreator(victimCount, "victim");

	victimArray.push(currentVictim);


	moreVictims = confirm("Do you have info for another victim? ");
}


var moreVolunteers = confirm("Do you have disaster VOLUNTEER info to enter? ");
var volunteerArray = [];
var volunteerCount = 0;

while(moreVolunteers){

	volunteerCount++;


	currentVolunteer = personCreator(volunteerCount, "volunteer");
	

	volunteerArray.push(currentVolunteer);


	moreVolunteers = confirm("Do you have info for another volunteer? ");
}


var summaryMessage = "There are " + victimCount + " victims.\n"
							+ "There are " + volunteerCount + " volunteers.\n";


function messageCreator(type, typeCount, typeArray, summaryMessage){

	for(var i=0; i<typeCount; i++){

		summaryMessage += type + "#" + (i+1) + ": \n";

			for(key in typeArray[i]){
				summaryMessage += "   " + key + ": " + typeArray[i][key] + "\n";
			}	
	}

	return summaryMessage;

}

summaryMessage = messageCreator("Victim", victimCount, victimArray, summaryMessage);
summaryMessage = messageCreator("Volunteer", volunteerCount, volunteerArray, summaryMessage);

alert(summaryMessage);

var personInNeed = prompt("Enter the name of a person in need. ");
var volunteersAvail = [];
var responderMessage = "The following volunteers are available on your victim's street: \n";


for(var i=0; i<victimCount; i++){
			// console.log("In for loop 1");
	if(personInNeed === victimArray[i]["Name"]){
			// console.log("In if statement 1");
		var streetInNeed = victimArray[i]["Street"];
			// console.log(victimArray[i]["Street"]);
	
		for(var i=0; i<volunteerCount; i++){
				// console.log("In for loop 2");
				// console.log(volunteerArray[i]["Street"]);
			if(streetInNeed === volunteerArray[i]["Street"]){
				// console.log("In for loop 2");
				// console.log(volunteerArray[i]["Name"]);

				responderMessage += "   " + volunteerArray[i]["Name"] + "\n";
			}
			// else{
			// 	responderMessage += "No volunteers available on " + victimArray[i]["Name"] + "'s street."; 
			// }
		}

	}

}

alert(responderMessage);

