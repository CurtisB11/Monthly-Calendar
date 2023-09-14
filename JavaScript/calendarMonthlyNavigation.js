// Calendar Monthly Navigation Tools JavaScript Document


function decodeSpecialCharacters(encodedString){
	var textElement = new DOMParser().parseFromString(encodedString, "text/html");
	return textElement.documentElement.textContent;
}

function createNavigationElements(passedInDateObject){
	'use strict';
	var previousYearEncodedText = "&lt;&lt;&nbsp;Year";
	var previousYearText = decodeSpecialCharacters(previousYearEncodedText);
	var previousMonthEncodedText = "&lt;&nbsp;Month";
	var previousMonthText = decodeSpecialCharacters(previousMonthEncodedText);
	var nextMonthEncodedText = "Month&nbsp;&gt;";
	var nextMonthText = decodeSpecialCharacters(nextMonthEncodedText);
	var nextYearEncodedText = "Year&nbsp;&gt;&gt;";
	var nextYearText = decodeSpecialCharacters(nextYearEncodedText);
	var theMonthToSelect = passedInDateObject.getMonth();
	var yearInTextBox = passedInDateObject.getFullYear();
	var navigation;
	document.getElementById("spaceForNavigation").innerHTML = "";
	var navigationForm = document.createElement("form");
	navigationForm.setAttribute("id", "calendarNavigation");
	navigationForm.setAttribute("method", "post");
	navigationForm.setAttribute("action" , "");
	createDynamicButton(navigationForm, "printButton", "Print", "window.print();return false;");
	createDynamicButton(navigationForm, "backOneYear", previousYearText, "previousYear(this);");
	createDynamicButton(navigationForm, "backOneMonth", previousMonthText, "previousMonth(this);");
	var selectMonth = document.createElement("select");
	selectMonth.setAttribute("id", "monthSelector");
	selectMonth.setAttribute("onChange", "makeNewMonth(this);");
	var optionMonth = "";
	monthsArray.forEach(function(names, n){
		optionMonth = document.createElement("option");
		optionMonth.setAttribute("value", n);
		optionMonth.appendChild(document.createTextNode(names));
		if(parseInt(n) === parseInt(theMonthToSelect)){
			optionMonth.setAttribute("selected", "selected");
		}
		selectMonth.appendChild(optionMonth);
	});
	navigationForm.appendChild(selectMonth);
	var textBoxForYear = document.createElement("input");
	textBoxForYear.setAttribute("type", "text");
	textBoxForYear.setAttribute("id", "yearTextBox");
	textBoxForYear.setAttribute("value", yearInTextBox);
	textBoxForYear.setAttribute("maxlength", 4);
	textBoxForYear.setAttribute("onKeyPress", "return isKeyAllowed(event);");
	textBoxForYear.setAttribute("onKeyUp", "makeNewMonth(this);");
	navigationForm.appendChild(textBoxForYear);
	createDynamicButton(navigationForm, "advanceOneMonth", nextMonthText, "nextMonth(this);");
	createDynamicButton(navigationForm, "advanceOneYear", nextYearText, "nextYear(this);");
	createDynamicButton(navigationForm, "toToday", "Return To Today", "backToToday();");
	document.getElementById("spaceForNavigation").appendChild(navigationForm);
}

function createDynamicButton(thisForm, idIn, valueIn, functionToCallIn){ // This method creates all navigation buttons in the form.
	var aButton = document.createElement("input");
	aButton.setAttribute("type", "button");
	aButton.setAttribute("id", idIn);
	aButton.setAttribute("value", valueIn);
	aButton.setAttribute("onClick", functionToCallIn);
	thisForm.appendChild(aButton);
}

function checkForUpdateToToday(){
	'use strict';
	var todayAtNoon = new Date(new Date().setHours(12, 0, 0, 0)); // Create a reusable date object variable for 12 noon inside function. This enables today's date to be updated from navigation buttons.
	return todayAtNoon;	
}

function backToToday(){
	'use strict';
	document.getElementById("spaceForCalendar").innerHTML = "";
	var updatedDate = checkForUpdateToToday();
	document.getElementById("yearTextBox").value = updatedDate.getFullYear();
	document.getElementById("monthSelector").selectedIndex = updatedDate.getMonth();
	createNavigationElements(updatedDate);
	createMonth(updatedDate);
}

function makeNewMonth(element){ // This method is called by both the dropdown list and the text box.
	'use strict';
	var callingElementType = element.type;
	var yearTyped = document.getElementById("yearTextBox").value;
	var monthSelected = document.getElementById("monthSelector").selectedIndex;
	if((isNaN(parseInt(yearTyped))) && (callingElementType === "select-one")){ // Trap for when month selected from dropdown list when year box is empty.
		alert('The year textbox must not be empty.');
		document.getElementById("monthSelector").selectedIndex = currentCalendarDateObject.getMonth();
		document.getElementById("yearTextBox").value = currentCalendarDateObject.getFullYear();
		document.getElementById("yearTextBox").select();
	}else if((yearTyped < 1752) && (callingElementType === "select-one")){
		alert('You need to enter a valid four digit year between 1752 and 2200.');
		document.getElementById("monthSelector").selectedIndex = currentCalendarDateObject.getMonth();
		document.getElementById("yearTextBox").value = currentCalendarDateObject.getFullYear();
		document.getElementById("yearTextBox").select();
	}else if(((parseInt(yearTyped) === 1752) && (monthSelected >= 8) && (yearTyped.length === 4)) || ((parseInt(yearTyped) > 1752) && (parseInt(yearTyped) < 2201) && (yearTyped.length === 4))){
		var updatedDate = new Date(yearTyped, monthSelected, 1);
		document.getElementById("spaceForCalendar").innerHTML = "";
		createNavigationElements(updatedDate);
		createMonth(updatedDate);
	}else if(yearTyped.length === 4){
		trapBadData(element, yearTyped, monthSelected);
	}
}

function previousMonth(element){
	'use strict';
	var monthSelected = parseInt(document.getElementById("monthSelector").selectedIndex);
	var yearInBox = parseInt(document.getElementById("yearTextBox").value);
	if(((yearInBox === 1752) && (monthSelected > 8)) || (yearInBox > 1752)){
		monthSelected -= 1;
		if(monthSelected < 0){
			monthSelected = 11;
			yearInBox -= 1;
		}
		var updatedDate = new Date(yearInBox, monthSelected, 1);
		document.getElementById("spaceForCalendar").innerHTML = "";
		createNavigationElements(updatedDate);
		createMonth(updatedDate);
	}else{
		trapBadData(element, yearInBox, monthSelected);
	}
}

function previousYear(element){
	"use strict";
	var monthSelected = parseInt(document.getElementById("monthSelector").selectedIndex);
	var yearInBox = parseInt(document.getElementById("yearTextBox").value);
	if(((yearInBox === 1753) && (monthSelected > 7)) || (yearInBox > 1753)){
		yearInBox -= 1;
		var updatedDate = new Date(yearInBox, monthSelected, 1);
		document.getElementById("spaceForCalendar").innerHTML = "";
		createNavigationElements(updatedDate);
		createMonth(updatedDate);
	}else{
		trapBadData(element, yearInBox, monthSelected);
	}
}

function nextMonth(element){
	'use strict';
	var monthSelected = parseInt(document.getElementById("monthSelector").selectedIndex);
	var yearInBox = parseInt(document.getElementById("yearTextBox").value);
	if(((yearInBox === 2200) && (monthSelected < 11)) || ((yearInBox > 1751) && (yearInBox < 2200))){
		monthSelected += 1;
		if(monthSelected > 11){
			monthSelected = 0;
			yearInBox += 1;
		}
		var updatedDate = new Date(yearInBox, monthSelected, 1);
		document.getElementById("spaceForCalendar").innerHTML = "";
		createNavigationElements(updatedDate);
		createMonth(updatedDate);
	}else{
		trapBadData(element, yearInBox, monthSelected);
	}
}

function nextYear(element){
	'use strict';
	var monthSelected = parseInt(document.getElementById("monthSelector").selectedIndex);
	var yearInBox = parseInt(document.getElementById("yearTextBox").value);
	if((yearInBox > 1751) && (yearInBox < 2200)){
		yearInBox += 1;
		var updatedDate = new Date(yearInBox, monthSelected, 1);
		document.getElementById("spaceForCalendar").innerHTML = "";
		createNavigationElements(updatedDate);
		createMonth(updatedDate);
	}else{
		trapBadData(element, yearInBox, monthSelected);
	}
}

function trapBadData(formElement, yearBoxPassedIn, monthSelectedPassedIn){
	"use strict";
	var callingElementType = formElement.type;
	var callingElementId = formElement.id;
	var intYearBoxValue = parseInt(yearBoxPassedIn);
	var intMonthIndexValue = parseInt(monthSelectedPassedIn);
	if(isNaN(intYearBoxValue)){ // Trap for button press when year box is empty.
		alert('Year box must not be empty.');
	}else if(intYearBoxValue < 1752){
		alert('The year can be no earlier than 1752.\n\nThe Gregorian Calendar was adopted in Britain that September.\nThis calendar\'s range begins there and extends to the year 2200.');
	}else if((intYearBoxValue <= 1752) && (callingElementId === "backOneYear")){
		alert('The year can be set to no earlier than 1752.\n\nThe Gregorian Calendar was adopted in Britain that September.\nThis application\'s range has been limited from that time, and extends to the year 2200.');
	}else if((intYearBoxValue === 1752) && (intMonthIndexValue < 9) && ((callingElementId === "monthSelector") || (callingElementId === "backOneMonth"))){
		alert('The month can be set no earlier than September in 1752.\n\nThis corresponds to the British adoption of the Gregorian Calendar.\nThis calendar\'s range begins there and extends to the year 2200.');
	}else if(((intYearBoxValue === 1752) && (intMonthIndexValue < 9)) || ((intYearBoxValue === 1753) && (intMonthIndexValue < 8))){
		alert('Application is limited to display no earlier than September in 1752.\n'+ monthsArray[intMonthIndexValue] +', 1752 occurs before Britain began use of the Gregorian Calendar.\n\nTo view 1752, first, set the month between September and December.');
	}else if((intYearBoxValue === 2200) && (intMonthIndexValue === 11)){
		alert('The upper limit of this calendar\'s range is set to December of 2200.');
	}else if(intYearBoxValue === 2200){
		alert('This calendar\'s year range is limited to no later than 2200.');
	}else if((intYearBoxValue < 1752) || (intYearBoxValue > 2200)){
		alert('A valid four digit year between 1752 and 2200 is needed.');
	}
	document.getElementById("yearTextBox").value = currentCalendarDateObject.getFullYear();
	document.getElementById("monthSelector").selectedIndex = currentCalendarDateObject.getMonth();
	if(callingElementType === "select-one"){
		document.getElementById("monthSelector").focus();
	}else{
		document.getElementById("yearTextBox").select();
	}
} // end method trapBadData()

// Section below from my rewrite. It detects key presses and locks out invalid characters and shift key combinations.
function detectSpecificKeys(passedInEvent){ // Due to a couple of issues locking out keys using keycodes, I created this function to evaluate shift key presses and single quote key presses based on their symbols, charCodes, and/or their KeyboardEvent read-only properties.
	'use strict';
	var theEvent = passedInEvent;
	var characterCodeOfKey = theEvent.which; // Returns ASCII charCode of pressed key.
	var keyCharacterString = String.fromCharCode(characterCodeOfKey); // When there is no KeyboardEvent read-only property available for a specific key, use this method to convert given Unicode, or ASCII value, to the character itself.
	var isTrueOrFalse = true;
	if(theEvent.shiftKey){ // This if evaluates the event onKeyPress with the KeyboardEvent.shiftKey read-only property. Obviously, evaluates for a press of the shift key.
		isTrueOrFalse = false;
	}else if(keyCharacterString === "'"){ // Evaluates for a press of the single quote.
		isTrueOrFalse = false;
	}
	return isTrueOrFalse;
}

function getKeyCode(parEvent){ // When passed the onKeyPress event, this function will return a code for the pressed key, otherwise it returns false.
	'use strict';
	var anEvent = parEvent;
	var codeIfKeyPress = "";
	if(!anEvent || !anEvent.type){
		codeIfKeyPress = false;
	}else{
		var isPressedCode = (anEvent.keyCode)? anEvent.keyCode: ((anEvent.charCode)? anEvent.charCode: anEvent.which); // An if statement using two ternary operators to allow the possibility of evaluating all three ways, if necessary, to find a code and then assign it to isPressedCode variable.
		codeIfKeyPress = isPressedCode;
	} // End if
	return codeIfKeyPress;
}

// This function locks out all keyboard keys except navigation, enter and number keys.
function isKeyAllowed(textBoxEvent){ // This function called by textboxes in form using event onKeyPress="return isKeyAllowed(event);". If false is returned, it means character is not permitted.
	'use strict';
	var c = getKeyCode(textBoxEvent); // Call to this function returns keycode of pressed keyboard key, or false if there was no event.
	var keyAllowed = detectSpecificKeys(textBoxEvent); // Call to function above that evaluates whether shift, or single quote keys are pressed.
	var isTrueOrIsFalse = true; // Default is all keys being allowed.
	if ((c < 8) || ((c > 9) && (c < 37)) || (c === 38) || ((c > 39) && (c < 48)) || (c > 57) || (keyAllowed === false)){ // These are the blocked ranges. Allowed keys: backspace=8, tab=9, leftArrow=37(also used by percent, but shift is blocked), rightArrow=39(also used by single quote), and 0-9 which 0=48 through 9=57.
		isTrueOrIsFalse = false; // Any keycode that causes this if-block to evaluate as true, is a key that is NOT allowed, and its access is set to false.
	}
	return isTrueOrIsFalse; // If true is returned, key is allowed. If false, key is not allowed.
}


