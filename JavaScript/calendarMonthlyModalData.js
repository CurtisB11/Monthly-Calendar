// JavaScript Document

// For Yearly calendar only:
// The order of date div classes indicating their maximum position when all events are active:
// class 0: weekEnd or weekDay
// class 1: birthdayOccasion
// class 2: occasion, or dateHoliday, or dateTodayHoliday
// class 3: eventMoonPhase
// class 4: todaysDate
// For Yearly calendar only.

// For Monthly calendar only:
// The order of cell block classes indicating their maximum position when all events are active:
// class 0: daysOfTheWeekend or daysOfTheWeek
// class 1: birthdayOccasion
// class 2: occasion, or dateHoliday, or dateTodayHoliday
// class 3: todaysDate
// class 4: eventMoonPhase
// class 5: cellBackgroundFor"EventTypeWithMoonPhaseName"
// For Monthly calendar only.

// Sunday, the 12th of March, 2017 is a good date to view the entire class order. To see todaysDate in the list, obviously you'll need to temporarily roll back computer time to that date.

function createModalBackgroundStyles(classItemZero, classItemOne, classItemTwo, classItemThree){
	'use strict';
//	alert("classItemZero: "+ classItemZero +"\nclassItemOne: "+ classItemOne +"\nclassItemTwo: "+ classItemTwo +"\nclassItemThree: "+ classItemThree);
//	alert(classItemZero +"\n"+ classItemOne +"\n"+ classItemTwo +"\n"+ classItemThree);
	if(classItemZero === "daysOfTheWeekend"){
		document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxWeekendBackground.png')";
	}else if(classItemZero === "daysOfTheWeek"){
		document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxRegularWeekdayBackground.png')";
	}	
	if(classItemOne === "eventMoonPhase"){ // This stand-alone if-statement calls the function to set all the regular blue background moon phases for modal.
		setModalMoonPhaseBackground("");
	}
	if(classItemOne === "birthdayOccasion"){
		if(classItemTwo === "eventMoonPhase"){
			setModalMoonPhaseBackground("Birthday");
		}else{
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxBirthdayBackground.png')";
		}
	}
	if((classItemOne === "occasion") || (classItemTwo === "occasion")){
		if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
			setModalMoonPhaseBackground("Occasion"); // Capital letter in occasion is used to match camel-case structure used in .png filename.
		}else{
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxOccasionBackground.png')";
		}
	}
	if((classItemOne === "dateHoliday") || (classItemTwo === "dateHoliday")){
		if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
			setModalMoonPhaseBackground("Occasion");
		}else{
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxOccasionBackground.png')";
		}
	}
} // end method createModalBackgroundStyles
	
	
	
function createModalMemoStyles(classItemZero, classItemOne, classItemTwo, classItemThree){
	document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "10px";
	if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML === "")){
		document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = null; // Remove margin space when memo two appears by itself, without any memo one. This often happens with season-change dates.
	}else if(document.getElementsByClassName("oneMemoOccasion")[0].innerHTML === ""){
		document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = null;
	}
	if(classItemZero === "daysOfTheWeekend"){
		document.getElementsByClassName("bigDateNumber")[0].style.color = "#808080";
	}
	if((classItemOne === "dateHoliday") || (classItemTwo === "dateHoliday")){
		document.getElementsByClassName("bigDateNumber")[0].style.color = "magenta";						
		setModalMemoColour("oneMemoOccasion");
		setModalMemoColour("twoMemoOccasion");
	}
	// Styles for memos begin here.
	if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
		if((classItemOne === "birthdayOccasion") || (classItemOne === "occasion") || (classItemOne === "dateHoliday")){
			document.getElementsByClassName("dateModalInfoHolder")[0].style.bottom = "155px";
		}
	}
	if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML !== "")){ // This if sets the line height, and the space beneth the memo for season change. Added February 21st, 2023.
		document.getElementsByClassName("twoMemoOccasion")[0].style.lineHeight = "20px";
		document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "15px";
	}else if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML === "")){
		document.getElementsByClassName("twoMemoOccasion")[0].style.lineHeight = "20px";
	}
} // end method createModalMemoStyles



function createModalMemoTodayStyles(classItemOne, classItemTwo, classItemThree, classItemFour){
	if((classItemOne === "todaysDate") || (classItemTwo === "todaysDate") || (classItemThree === "todaysDate")){ // In the current setup, today's date should never go higher than classItemThree.
		if(classItemOne === "birthdayOccasion"){
			var balloonsGraphic = document.createElement("img");
			balloonsGraphic.setAttribute("src", "../../images/calendarRounded/balloons.png");
			balloonsGraphic.setAttribute("id", "balloonsGraphic");
			balloonsGraphic.setAttribute("alt", "birthday balloons graphic");
			balloonsGraphic.setAttribute("height", "200");
			balloonsGraphic.setAttribute("width", "200");
			document.getElementById("sideGraphicContainer").appendChild(balloonsGraphic);
			setBalloonGraphicSizeAndPosition(balloonsGraphic, "200", "200", "20px", "80px");
			if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarDateObject.getFullYear()) === true) && (parseInt(currentCalendarDateObject.getFullYear()) > 1752)){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "180", "180", "15px", "60px");
			/*	balloonsGraphic.setAttribute("height", "180");
				balloonsGraphic.setAttribute("width", "180");
				document.getElementById("balloonsGraphic").style.top = "15px";
				document.getElementById("balloonsGraphic").style.left = "60px";*/
			}
		}
		document.getElementsByClassName("bigDateNumber")[0].style.color = "red";
		document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBoxTodayBackground.png')";
		document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = null;
		if((classItemOne === "dateTodayHoliday") || (classItemTwo === "dateTodayHoliday")){
			setModalMemoColour("oneMemoOccasion");
			setModalMemoColour("twoMemoOccasion");
			document.getElementsByClassName("bigDateNumber")[0].style.color = "magenta";
		}
		if((classItemOne === "birthdayOccasion") || (classItemTwo === "dateTodayHoliday")){
			document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "10px";
		}
		// Styles for today's memos begin here.
		if((classItemTwo === "todaysDate") && ((classItemOne === "birthdayOccasion") || (classItemOne === "occasion") || (classItemOne === "dateTodayHoliday"))){
			document.getElementById("theDayCounter").style.bottom = "155px";
			if((document.getElementsByClassName("oneMemoOccasion")[0].innerHTML !== "") && (document.getElementsByClassName("twoMemoOccasion")[0].innerHTML !== "")){
				document.getElementById("theDayCounter").style.bottom = "195px"; // Special case for Canada Day, as the program is set up so there's no "occasion" class allowed when there's a dateTodayHoliday. Added July 1st, 2022.
				document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "10px";
			}
		}
		if((classItemThree === "todaysDate") && ((classItemTwo === "occasion") || (classItemTwo === "dateTodayHoliday"))){
			document.getElementById("theDayCounter").style.bottom = "190px";
			if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarDateObject.getFullYear()) === true) && (parseInt(currentCalendarDateObject.getFullYear()) > 1752)){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "150", "150", "15px", "70px");
			/*	balloonsGraphic.setAttribute("height", "150");
				balloonsGraphic.setAttribute("width", "150");
				document.getElementById("balloonsGraphic").style.top = "15px";
				document.getElementById("balloonsGraphic").style.left = "70px"; */
			}else if(classItemOne === "birthdayOccasion"){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "200", "200", "20px", "85px");
			/*	document.getElementById("balloonsGraphic").style.left = "85px"; */
			}
		}
		if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML !== "")){ // This if sets the line height, and the space beneth the memo for season change. Added February 21st, 2023.
			document.getElementsByClassName("twoMemoOccasion")[0].style.lineHeight = "20px";
			document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "10px";
			document.getElementById("theDayCounter").style.bottom = "205px";
		}else if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML === "")){
			document.getElementsByClassName("twoMemoOccasion")[0].style.lineHeight = "20px";
			document.getElementById("theDayCounter").style.bottom = "170px";
		}
		// Styles for today's memos with moon phases begin here.
		if(classItemTwo === "eventMoonPhase"){
			setModalMoonPhaseBackground("Today");
			document.getElementsByClassName("wordTodayModalMemo")[0].style.left = "240px";
			document.getElementById("theDayCounter").style.bottom = "155px";
		}else if(classItemThree === "eventMoonPhase"){
			setModalMoonPhaseBackground("Today");
			document.getElementsByClassName("wordTodayModalMemo")[0].style.left = "240px";
			document.getElementsByClassName("dateModalInfoHolder")[0].style.bottom = "155px";
			if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarDateObject.getFullYear()) === true) && (parseInt(currentCalendarDateObject.getFullYear()) > 1752)){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "150", "150", "20px", "90px");
			/*	balloonsGraphic.setAttribute("height", "150");
				balloonsGraphic.setAttribute("width", "150");
				document.getElementById("balloonsGraphic").style.top = "20px";
				document.getElementById("balloonsGraphic").style.left = "90px"; */
			}else if(classItemOne === "birthdayOccasion"){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "180", "180", "25px", "95px");
			/*	balloonsGraphic.setAttribute("height", "180");
				balloonsGraphic.setAttribute("width", "180");
				document.getElementById("balloonsGraphic").style.top = "25px";
				document.getElementById("balloonsGraphic").style.left = "95px";	*/
			}
			if(document.getElementsByClassName("twoMemoOccasion")[0].innerHTML !== ""){ // This if is needed to fix an issue where there can sometimes be a second event dateTodayHoliday with an occasion, and sometimes there's only one, just the occasion event. This if fixes the need to distinguish them. Obviously, both types are with a moon phase.
				document.getElementById("theDayCounter").style.bottom = "215px";
				document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = null;
				document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
				document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
				document.getElementsByClassName("numbers")[2].style.lineHeight = "25px"; // Adjustment made for 1st of July, 2021. class="daysOfTheWeek dateTodayHoliday todaysDate eventMoonPhase cellBackgroundForTodayLastQuarter"
			}else if(document.getElementsByClassName("twoMemoOccasion")[0].innerHTML === ""){
				document.getElementById("theDayCounter").style.bottom = "190px"; // Adjustment made for the 31st of October, 2018. class="daysOfTheWeek occasion todaysDate eventMoonPhase cellBackgroundForTodayLastQuarter"
			}
			if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML !== "")){
				document.getElementById("theDayCounter").style.bottom = "225px";
				document.getElementsByClassName("numbers")[0].style.lineHeight = "20px";
				document.getElementsByClassName("numbers")[1].style.lineHeight = "20px";
				document.getElementsByClassName("numbers")[2].style.lineHeight = "20px";
				document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "5px";
				document.getElementsByClassName("dateModalInfoHolder")[0].style.bottom = "145px";
			}else if((document.getElementsByClassName("twoMemoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneMemoOccasion")[0].innerHTML === "")){
				document.getElementById("theDayCounter").style.bottom = "205px";
				document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
				document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
				document.getElementsByClassName("numbers")[2].style.lineHeight = "25px";
				document.getElementsByClassName("dateModalInfoHolder")[0].style.bottom = "155px";
			}
		}else if(classItemFour === "eventMoonPhase"){
			setModalMoonPhaseBackground("Today");
			document.getElementsByClassName("wordTodayModalMemo")[0].style.left = "240px";
			document.getElementById("theDayCounter").style.bottom = "210px";
			document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
			document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
			document.getElementsByClassName("numbers")[2].style.lineHeight = "25px";
			document.getElementsByClassName("twoMemoOccasion")[0].style.marginBottom = "5px";
			document.getElementsByClassName("dateModalInfoHolder")[0].style.bottom = "145px";
			if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarDateObject.getFullYear()) === true) && (parseInt(currentCalendarDateObject.getFullYear()) > 1752)){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "120", "120", "20px", "90px");
			/*	balloonsGraphic.setAttribute("height", "120");
				balloonsGraphic.setAttribute("width", "120");
				document.getElementById("balloonsGraphic").style.top = "20px";
				document.getElementById("balloonsGraphic").style.left = "90px"; */
			}else if(classItemOne === "birthdayOccasion"){
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "160", "160", "15px", "90px");
			/*	balloonsGraphic.setAttribute("height", "160");
				balloonsGraphic.setAttribute("width", "160");
				document.getElementById("balloonsGraphic").style.top = "15px";
				document.getElementById("balloonsGraphic").style.left = "90px"; */
			}
		}
	}
} // end method createModalMemoTodayStyles()

function setBalloonGraphicSizeAndPosition(balloonsIn, heightIn, widthIn, topIn, leftIn){
	"use strict";
	balloonsIn.setAttribute("height", heightIn);
	balloonsIn.setAttribute("width", widthIn);
	document.getElementById("balloonsGraphic").style.position = "relative";
	document.getElementById("balloonsGraphic").style.top = topIn;
	document.getElementById("balloonsGraphic").style.left = leftIn;
}

function setModalMemoColour(parOccasion){
	'use strict';
	if(document.getElementsByClassName(parOccasion)[0].innerHTML.indexOf("Holiday") !== -1){
		document.getElementsByClassName(parOccasion)[0].style.color = "magenta";
		document.getElementsByClassName(parOccasion)[0].style.fontWeight = "bold";
	}else{
		document.getElementsByClassName(parOccasion)[0].style.color = "black";
	}
}

function setModalMoonPhaseBackground(parEventClassType){
	'use strict';
	var moonPhaseNameText = document.getElementsByClassName("nameOfMoonPhase")[0].innerHTML;
	var phaseNameToColon = moonPhaseNameText.substr(0, moonPhaseNameText.indexOf(":"));
	var phaseForFileName = phaseNameToColon.replace(" ", "");
//	var capitalizeOccasionNameFirstLetter = parEventClassType.charAt(0).toUpperCase() + parEventClassType.substr(1);
	document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarSquare/dateBox"+ phaseForFileName + parEventClassType +"Background.png')";
//	alert(document.getElementsByClassName("modal-content")[0].style.backgroundImage);
}

// dateObjectIn, yearOfTodayIn, monthOfTodayIn, dateOfMonthTodayIn
// createModalDateMemo(modalDateObject, yearToday, monthToday, dateOfMonthToday)
function createModalDateMemo(parDateObject, yearOfTodayIn, monthOfTodayIn, dateOfMonthTodayIn){
	'use strict';
	var theOccasionMemo = "";
	var occasionMemoTwo = "";
	var concatenatedMemos = "";
	var yearIn = parDateObject.getFullYear();
	var dateIn = parDateObject.getDate();
	var monthIn = parDateObject.getMonth();
	var newYearsDayObject = new Date(yearIn, 0, 1);
	var newYearsDayDoW = newYearsDayObject.getDay();
	var canadaDayObject = new Date(yearIn, 6, 1);
	var canadaDayDoW = canadaDayObject.getDay();
	var nationalDayTruthReconciliationObject = new Date(yearIn, 8, 30);
	var dayTruthReconciliationDoW = nationalDayTruthReconciliationObject.getDay();
	var remembranceDayObject = new Date(yearIn, 10, 11);
	var remembranceDayDoW = remembranceDayObject.getDay();
	var xmasDayObject = new Date(yearIn, 11, 25);
	var xmasDayDoW = xmasDayObject.getDay();
	var boxingDayObject = new Date(yearIn, 11, 26);
	var boxingDayDoW = boxingDayObject.getDay();
	reInitializeMainArrayModalItems(yearIn, monthIn);
	for(var m = 0; m < eventsArray.length; m++){
		if((eventsArray[m].theMemo.indexOf("Wedding") !== -1) && (yearIn > eventsArray[m].theYear)){
			if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn <= parseInt(eventsArray[m].theYear) + 100)){
				if((eventsArray[m].theDate === dateOfMonthTodayIn) && (eventsArray[m].theMonth === parseInt(monthOfTodayIn + 1) && (yearIn === yearOfTodayIn))){
					theOccasionMemo = "<span id=\"happyBirthday\">HAPPY "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) +" WEDDING ANNIVERSARY</span>, "+ eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("'")).replace(/\sand\s/, " & ") +" !";
				}else{
					theOccasionMemo = eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("Wedding")).replace("%", " ") + count(yearIn, parseInt(eventsArray[m].theYear), 1) +"Wedding Anniversary.";
				}
			}
		}else if((eventsArray[m].theMemo.indexOf("Birthday") !== -1) && (yearIn >= eventsArray[m].theYear)){
			if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn <= parseInt(eventsArray[m].theYear) + 120)){
				if((eventsArray[m].theDate === dateOfMonthTodayIn) && (eventsArray[m].theMonth === parseInt(monthOfTodayIn + 1) && (yearIn === yearOfTodayIn))){
					theOccasionMemo = "You\'re now "+ count(yearIn, parseInt(eventsArray[m].theYear), 2) +". <span id=\"happyBirthday\">HAPPY BIRTHDAY, "+ eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("'")).replace("%", " ") +" !</span>";
				}else{
			//		theOccasionMemo = eventsArray[m].theMemo.replace("%", " ") +"."; // display birthdays in modal without age count.
					theOccasionMemo = eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("Birthday")).replace("%", " ") +" "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) + eventsArray[m].theMemo.slice(-8) +"."; // Add age count to birthdays in modal.
				}
			}
		}else if((eventsArray[m].theFlag === 2) && (eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[m].theYear)){
			if(eventsArray[m].theMemo.indexOf("Holiday") !== -1){
				occasionMemoTwo = eventsArray[m].theMemo.replace("%", ", ") +".";
			}else{
				occasionMemoTwo = eventsArray[m].theMemo.replace("%", " ") +".";
			}
		}else if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[m].theYear) && (eventsArray[m].theMemo !== "Today")){
			if(eventsArray[m].theMemo.indexOf("Holiday") !== -1){
				theOccasionMemo = eventsArray[m].theMemo.replace("%", ", ") +".";
			}else{
				theOccasionMemo = eventsArray[m].theMemo.replace("%", " ") +".";
			}
		}
	} // End for loop
	if((dateIn === setNewYearsHolidayDate(monthIn, yearIn)) && ((newYearsDayDoW === 0) || (newYearsDayDoW === 6))){
	//	theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 4); // Holiday memo for New Year's Day.
		theOccasionMemo = "Holiday for New Year\'s Day.";
/*	}else if(dateIn === createShroveTuesdayDate(yearIn).getDate()){
		theOccasionMemo = theOccasionMemo.replace("%", ", "); // Holiday memo for Pancake Day.
*/	}else if(dateIn === setPaddysDayHolidayDate(monthIn, yearIn)){
		theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 27); // Holiday memo for St. Patrick's Day.
	}else if((dateIn === evaluateGoodFriday(yearIn).getDate()) && (monthIn === evaluateGoodFriday(yearIn).getMonth()) && (yearIn > 1866)){ // Only append "Statutory Holiday" text to Good Friday memo from year 1867 onward.
		occasionMemoTwo = setModalHolidayMemos(occasionMemoTwo, 9); // Holiday text for Good Friday.
	}else if(dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn)){
		theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 28); // Holiday memo for St. George's Day.
	}else if(dateIn === setVictoriaDayHolidayDate(monthIn, yearIn)){
		theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 12); // Holiday memo for Victoria Day.
	}else if((dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn))){
		theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 29); // Holiday memo for Discovery Day.
	}else if((dateIn === setCanadaDayHolidayDate(monthIn, yearIn)) && ((canadaDayDoW === 0) || (canadaDayDoW === 6))){
		occasionMemoTwo = "Holiday for "+ eventsArray[14].theMemo.split(" ", 4).splice(-2).join(" ") +"."; // Method split() creates an array from the initial memo string, with space " " set here as the seperator. It starts from first space. By setting the number of splits to 4 (the limit parameter) it then throws away all text after fourth space. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Adding splice -2 takes two elements from the end of the given array. Adding join(), rejoins the two word string and substitutes in a space, replacing the comma from the array. This removes my year count and the word "celebration" for instances where there is no comma in the initial memo string.
/*		if((occasionMemoTwo.indexOf("Canada Day") !== -1) || (occasionMemoTwo.indexOf("Dominion Day") !== -1)){
			occasionMemoTwo = "Statutory Holiday, "+ eventsArray[14].theMemo +".";
//			theOccasionMemo = "Statutory Holiday, "+ theOccasionMemo.replace('<br /><br />', '');
		}else{
*/		//	theOccasionMemo = "Statutory Holiday for "+ eventsArray[14].theMemo.replace(/\,.*/,'.'); // Replace all memo-text after comma with a period. This removes my count and the word "celebration". Worked great until I decided to remove the comma after the word "Day". Now, it no longer works here.
		//	theOccasionMemo = "Statutory Holiday for "+ eventsArray[14].theMemo.substr(0, eventsArray[14].theMemo.indexOf(" ", eventsArray[14].theMemo.indexOf(" ") + 1)) +"."; // Two nested indexOf() methods return numeric index value of second space. Substr displays all text from index 0 to index number returned by two nested indexOf() methods. This allows applicable Canada Day, or Dominion Day to be displayed in memo text, ommiting my year count and the word "celebration".
/*			occasionMemoTwo = "Statutory Holiday for "+ eventsArray[14].theMemo.split(" ", 2).join(" ") +"."; // Method split() creates an array from the initial memo string, with space " " set here as the seperator. It starts from first space. By setting the number of splits to 2 (the limit parameter) it then throws away all text after second space. Adding join(), rejoins the two word string and substitutes in a space, replacing the comma from the array. This removes my year count and the word "celebration" for instances where there is no comma in the initial memo string.
		//	theOccasionMemo = "Statutory Holiday for "+ eventsArray[14].theMemo.match(/Dominion|Canada/) +" Day.";
		} // All commented out code above works correctly.
*/	}else if(dateIn === setOrangemansDayHolidayDate(monthIn, yearIn)){
		theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 30); // Holiday memo for Orangeman's Day.
	}else if(dateIn === setLabourDayHolidayDate(monthIn, yearIn)){
		occasionMemoTwo = setModalHolidayMemos(occasionMemoTwo, 16);  // Holiday memo for Labour Day.
//		occasionMemoTwo = occasionMemoTwo.replace("%", ", ");
	}else if((dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn)) && ((dayTruthReconciliationDoW === 0) || (dayTruthReconciliationDoW === 6))){
//		occasionMemoTwo = setModalHolidayMemos(occasionMemoTwo, 48); // No good, as it only displays "Holiday for NDTR" text. Holiday memo for National Day For Truth And Reconciliation. Only displays when NDTR falls on a weekend and holiday falls on Monday in October.
		occasionMemoTwo = "Holiday for National Day for Truth and Reconciliation."; // Only displays when NDTR falls on a weekend and holiday falls on Monday in October.
	}else if(dateIn === setThanksgivingDayHolidayDate(monthIn, yearIn)){
		occasionMemoTwo = setModalHolidayMemos(occasionMemoTwo, 17);  // Holiday memo for Thanksgiving Day.
//		occasionMemoTwo = occasionMemoTwo.replace("%", ", ");
	}else if((dateIn === setRemembranceDayHolidayDate(monthIn, yearIn)) && ((remembranceDayDoW === 0) || (remembranceDayDoW === 6))){
		theOccasionMemo = "Holiday for "+ eventsArray[20].theMemo.match(/Armistice|Remembrance/) +" Day.";
/*		if((theOccasionMemo.indexOf("Remembrance") !== -1) || (theOccasionMemo.indexOf("Armistice") !== -1)){
			theOccasionMemo = "Public Holiday, "+ eventsArray[20].theMemo.replace('The', 'the') +".";
//			theOccasionMemo = "Statutory Holiday, "+ theOccasionMemo.replace('<br /><br />The', 'the');
		}else{
			theOccasionMemo = "Public Holiday for "+ eventsArray[20].theMemo.match(/Armistice|Remembrance/) +" Day.";
		}
*/	}else if((dateIn === setXmasDayHolidayDate(monthIn, yearIn)) && ((xmasDayDoW === 0) || (xmasDayDoW === 6))){
	//	theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 25); // Holiday memo for Xmas Day.
		theOccasionMemo = "Holiday for Xmas Day.";
	}else if((dateIn === setBoxingDayHolidayDate(monthIn, yearIn)) && ((boxingDayDoW === 0) || (boxingDayDoW === 6))){
	//	theOccasionMemo = setModalHolidayMemos(theOccasionMemo, 26); // Holiday memo for Boxing Day.
		theOccasionMemo = "Holiday for Boxing Day.";
	}
//	concatenatedMemos = "<div class=\"dateModalInfoHolder\"><div class=\"twoMemoOccasion\">"+ occasionMemoTwo +"</div><div class=\"oneMemoOccasion\">"+ theOccasionMemo +"</div></div>";
//	concatenatedMemos = "<div class=\"twoMemoOccasion\">"+ occasionMemoTwo +"</div><div class=\"oneMemoOccasion\">"+ theOccasionMemo +"</div>";
	
	var twoOccasionHolder = document.createElement("div");
	twoOccasionHolder.classList.add("twoMemoOccasion");
	twoOccasionHolder.insertAdjacentHTML("afterbegin", occasionMemoTwo);
	var oneOccasionHolder = document.createElement("div");
	oneOccasionHolder.classList.add("oneMemoOccasion");
	oneOccasionHolder.insertAdjacentHTML("beforeend", theOccasionMemo);
	concatenatedMemos = twoOccasionHolder.outerHTML + oneOccasionHolder.outerHTML;
	
	return concatenatedMemos;
}

function setModalHolidayMemos(parTheOccasionMemo, parEventsArrayIndex){
	'use strict';
	var theHolidayMemo = "";
	var theHolidayType = "";
	if((parEventsArrayIndex === 4) || (parEventsArrayIndex === 9) || (parEventsArrayIndex === 14) || (parEventsArrayIndex === 16) || (parEventsArrayIndex === 25)){
		theHolidayType = "Statutory";
	}else if((parEventsArrayIndex === 26) || (parEventsArrayIndex === 27) || (parEventsArrayIndex === 28) || (parEventsArrayIndex === 29) || (parEventsArrayIndex === 30)){
		theHolidayType = "Provincial";
	}else if((parEventsArrayIndex === 12) || (parEventsArrayIndex === 17)){
		theHolidayType = "Public";
	}
//	alert(eventsArray[parEventsArrayIndex].theMemo +"." +"\n"+ parTheOccasionMemo);
	if(eventsArray[parEventsArrayIndex].theMemo +"." === parTheOccasionMemo){
		theHolidayMemo = theHolidayType +" Holiday, "+ eventsArray[parEventsArrayIndex].theMemo +".";
	}else{
		theHolidayMemo = theHolidayType +" Holiday for "+ eventsArray[parEventsArrayIndex].theMemo +".";
	}
	return theHolidayMemo;
}

function calculateModalDayPosition(yearPassedIn, monthPassedIn, dateOfMonthIn){
	'use strict';
	var dayNumbersForToday = "";
	var leapYearSentence = "";
	var daysPluralOrSingular = "";
	var theDayAtNoon = new Date(yearPassedIn, monthPassedIn, dateOfMonthIn, 12, 0, 0);
	var start = new Date(parseInt(theDayAtNoon.getFullYear() - 1), 11, 31, 12, 0, 0);
	var end = new Date(theDayAtNoon.getFullYear(), 11, 31, 12, 0, 0);
	var diffFromBeginningInMilliseconds = parseInt((theDayAtNoon - start) + ((start.getTimezoneOffset() - theDayAtNoon.getTimezoneOffset()) * 60 * 1000)); // Subtract out DST, if applicable.
	var diffFromEndInMilliseconds = parseInt((end - theDayAtNoon) + ((theDayAtNoon.getTimezoneOffset() - end.getTimezoneOffset()) * 60 * 1000));
	var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
	var daysFromBeginning = Math.ceil(diffFromBeginningInMilliseconds / oneDayInMilliseconds);
	var daysFromEnd = Math.ceil(diffFromEndInMilliseconds / oneDayInMilliseconds);
	var totalDaysInYear = parseInt(daysFromBeginning + daysFromEnd);
	if(daysFromEnd === 1){
		daysPluralOrSingular = " day";
	}else{
		daysPluralOrSingular = " days";
	}
	if(totalDaysInYear === 366){
		var leapYearTextContainer = document.createElement("span");
		leapYearTextContainer.setAttribute("id", "leapYearModalSentence");
		var leapYearWords = document.createElement("span");
		leapYearWords.setAttribute("id", "leapYearModalWords");
		leapYearWords.appendChild(document.createTextNode("leap year")); // This "leap year" text is bolded. That's why it's handled seperately from the rest.
		leapYearTextContainer.appendChild(document.createTextNode("( "+ yearPassedIn +" is a "));
		leapYearTextContainer.appendChild(leapYearWords);
		leapYearTextContainer.appendChild(document.createTextNode(". )"));
		leapYearSentence = leapYearTextContainer.outerHTML;
	}else{
		leapYearSentence = "";
	}
	var elapsedDaysHolder = document.createElement("span");
	elapsedDaysHolder.classList.add("numbers");
	elapsedDaysHolder.appendChild(document.createTextNode(daysFromBeginning));
	var remainingDaysHolder = document.createElement("span");
	remainingDaysHolder.classList.add("numbers");
	remainingDaysHolder.appendChild(document.createTextNode(daysFromEnd));
	var totalDaysHolder = document.createElement("span");
	totalDaysHolder.classList.add("numbers");
	totalDaysHolder.appendChild(document.createTextNode(totalDaysInYear));
	var aBreak = document.createElement("br");
	dayNumbersForToday = "Today is day "+ elapsedDaysHolder.outerHTML +" of "+ yearPassedIn +"."+ aBreak.outerHTML +"This year has "+ remainingDaysHolder.outerHTML + daysPluralOrSingular +" left."+ aBreak.outerHTML +"Elapsed plus remaining &#61; "+ totalDaysHolder.outerHTML +" days. "+ leapYearSentence;
/*	
	if(totalDaysInYear === 366){
		if(daysFromEnd === 1){
	//		dayNumbersForToday = "<div id=\"theDayCounter\">Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> day left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days. ("+ yearPassedIn +" is a leap year.)</div>";
			dayNumbersForToday = "Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> day left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days. <span id=\"leapYearModalSentence\">( "+ yearPassedIn +" is a <span id=\"leapYearModalWords\">leap year.</span> )</span>";
		}else{
	//		dayNumbersForToday = "<div id=\"theDayCounter\">Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> days left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days. ("+ yearPassedIn +" is a leap year.)</div>";
			dayNumbersForToday = "Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> days left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days. <span id=\"leapYearModalSentence\">( "+ yearPassedIn +" is a <span id=\"leapYearModalWords\">leap year.</span> )</span>";
		}
	}else{
		if(daysFromEnd === 1){
	//		dayNumbersForToday = "<div id=\"theDayCounter\">Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> day left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days.</div>";
			dayNumbersForToday = "Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> day left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days.";
		}else{
	//		dayNumbersForToday = "<div id=\"theDayCounter\">Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> days left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days.</div>";
			dayNumbersForToday = "Today is day <span class=\"numbers\">"+ daysFromBeginning +"</span> of "+ yearPassedIn +".<br />This year has <span class=\"numbers\">"+ daysFromEnd +"</span> days left.<br />Elapsed plus remaining &#61; <span class=\"numbers\">"+ totalDaysInYear +"</span> days.";
		}
	} */
	return dayNumbersForToday;
}

function getDSTbeginTimeOfDay(parViewedYear){
	"use strict";
	var timeOfDayToBeginDST = 0;
	if((parViewedYear >= 1917) && (parViewedYear < 1952)){
		timeOfDayToBeginDST = "9:00 PM";
	}else if((parViewedYear >= 1952) && (parViewedYear < 1970)){
		timeOfDayToBeginDST = "12:00 AM";
	}else if((parViewedYear >= 1970) && (parViewedYear < 2011)){
		timeOfDayToBeginDST = "12:01 AM";
	}else if(parViewedYear >= 2011){
		timeOfDayToBeginDST = "2:00 AM";
	}
	return timeOfDayToBeginDST;
}

function getDSTendTimeOfDay(parViewedYear){
	"use strict";
	var timeOfDayToEndDST = 0;
	if((parViewedYear >= 1917) && (parViewedYear < 1952)){
		timeOfDayToEndDST = "9:00 PM";
	}else if((parViewedYear >= 1952) && (parViewedYear < 1970)){
		timeOfDayToEndDST = "12:00 AM";
	}else if((parViewedYear >= 1970) && (parViewedYear < 2011)){
		timeOfDayToEndDST = "12:01 AM";
	}else if(parViewedYear >= 2011){
		timeOfDayToEndDST = "2:00 AM";
	}
	return timeOfDayToEndDST;
}

function reInitializeMainArrayModalItems(theYearPassedIn, parGivenMonth){
	'use strict';
	// Not required to be in numerical order. All repeating annual occurrences in the eventsArray that need to use nth day, or other methods to evaluate when they occur, must be updated here in order to have them repeat on dates or months other than the listed dates or months in the eventsArray.
	if(parGivenMonth === 2){
		eventsArray[0].theDate = calc(1, theYearPassedIn).getDate();		// Spring Equinox
		eventsArray[0].theMemo = "The Vernal Equinox (start of Spring) for "+ theYearPassedIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(1, theYearPassedIn) +", Newfoundland "+ evaluateTimeZoneName(1);
	}
	if(parGivenMonth === 5){
		eventsArray[1].theDate = calc(2, theYearPassedIn).getDate();		// Summer Solstice
		eventsArray[1].theMemo = "The Summer Solstice for "+ theYearPassedIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(2, theYearPassedIn) +", Newfoundland "+ evaluateTimeZoneName(2);
	}
	if(parGivenMonth === 8){
		eventsArray[2].theDate = calc(3, theYearPassedIn).getDate();		// Fall Equinox
		eventsArray[2].theMemo = "The Autumnal Equinox (start of Fall) for "+ theYearPassedIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(3, theYearPassedIn) +", Newfoundland "+ evaluateTimeZoneName(3);
	}
	if(parGivenMonth === 11){
		eventsArray[3].theDate = calc(4, theYearPassedIn).getDate();		// Winter Solstice
		eventsArray[3].theMemo = "The Winter Solstice for "+ theYearPassedIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(4, theYearPassedIn) +", Newfoundland "+ evaluateTimeZoneName(4);
	}
	if((parGivenMonth === 0) && (theYearPassedIn > 1866)){
		eventsArray[4].theMemo = "Statutory Holiday, New Year\'s Day";
	}else{
		eventsArray[4].theMemo = "New Year\'s Day";
	}
	if((parGivenMonth === 1) || (parGivenMonth === 2)){	
		eventsArray[5].theMonth = createShroveTuesdayDate(theYearPassedIn).getMonth() + 1;		//  Pancake Day
		eventsArray[5].theDate = createShroveTuesdayDate(theYearPassedIn).getDate();
	}
	if(((parGivenMonth === 2) || (parGivenMonth === 3) || (parGivenMonth === 5))  && (theYearPassedIn > 1916)){
		eventsArray[8].theMonth = evaluateDSTbegin().getMonth() + 1;
		eventsArray[8].theDate = evaluateDSTbegin().getDate();								// DST begins
		eventsArray[8].theMemo = "Daylight Saving Time (DST) Begins: "+ getDSTbeginTimeOfDay(theYearPassedIn) +" "+ getNewfoundlandTimeZoneName(evaluateDSTbegin(), "short");
	}
	if((parGivenMonth === 2) || (parGivenMonth === 3)){
		eventsArray[9].theMonth = (evaluateGoodFriday(theYearPassedIn, "Gregorian").getMonth() + 1);		// Good Friday
		eventsArray[9].theDate = evaluateGoodFriday(theYearPassedIn, "Gregorian").getDate();
	}
	if((parGivenMonth === 2) || (parGivenMonth === 3)){
//		ShowEasters(theYearPassedIn);
		eventsArray[10].theMonth = parseInt(ShowEasters(theYearPassedIn, "Gregorian").getMonth() + 1);		// Easter Sunday
		eventsArray[10].theDate = ShowEasters(theYearPassedIn, "Gregorian").getDate();
	}
	if(parGivenMonth === 4){
		eventsArray[11].theDate = NthDay(2, 1, 5, theYearPassedIn); // Mother's Day
	}
	if(parGivenMonth === 5){
		eventsArray[13].theDate = NthDay(3, 1, 6, theYearPassedIn); // Father's Day
	}
	if(parGivenMonth === 6){
		if(theYearPassedIn === 1916){
			eventsArray[32].theMemo = "The Battle of Beaumont Hamel"; // Beaumont Hamel
		}else{
			eventsArray[32].theMemo = "Beaumont Hamel: "+ count(theYearPassedIn, parseInt(eventsArray[32].theYear), 1) +"anniversary";
		}
	}
/*	if((parGivenMonth === 6) && (theYearPassedIn === 1867)){		// Canada Day - Dominion Day
		eventsArray[14].theMemo = "British North America Act (BNA Act) effected";
	}else if((parGivenMonth === 6) && (theYearPassedIn < 1982)){
		eventsArray[14].theMemo = "Dominion Day "+ count(theYearPassedIn, parseInt(eventsArray[14].theYear), 2) +" celebration";
	}else if((parGivenMonth === 6) && (theYearPassedIn >= 1982)){
		eventsArray[14].theMemo = "Canada Day "+ count(theYearPassedIn, parseInt(eventsArray[14].theYear), 2) +" celebration";
	}
*/	if((parGivenMonth === 6) && (theYearPassedIn === 1867)){		// Canada Day - Dominion Day
		eventsArray[14].theMemo = "British North America Act (BNA Act) effected";
	}else if((parGivenMonth === 6) && (theYearPassedIn > 1867) && (theYearPassedIn < 1879)){
		eventsArray[14].theMemo = "Dominion Day "+ count(theYearPassedIn, parseInt(eventsArray[14].theYear), 2) +" celebration";
	}else if((parGivenMonth === 6) && (theYearPassedIn >= 1879) && (theYearPassedIn < 1982)){
		eventsArray[14].theMemo = "Statutory Holiday, Dominion Day "+ count(theYearPassedIn, parseInt(eventsArray[14].theYear), 2) +" celebration";
	}else if((parGivenMonth === 6) && (theYearPassedIn >= 1982)){
		eventsArray[14].theMemo = "Statutory Holiday, Canada Day "+ count(theYearPassedIn, parseInt(eventsArray[14].theYear), 2) +" celebration";
	}
/*	if(parGivenMonth === 7){
		eventsArray[15].theDate = NthDay(1, 4, 8, theYearPassedIn); // Regatta Day
		if(theYearPassedIn === 1940){
			eventsArray[15].theMemo = "Due to WWII, there was NO Regatta in 1940";
		}else if(theYearPassedIn < 1871){
			eventsArray[15].theMemo = "The "+ count(theYearPassedIn, parseInt(eventsArray[15].theYear) - 1, 1) +"St. John\'s Regatta";
		}else if((theYearPassedIn > 1870) && (theYearPassedIn < 1940)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ count(theYearPassedIn, parseInt(eventsArray[15].theYear) - 1, 1) +"St. John\'s Regatta";
		}else if((theYearPassedIn > 1940) && (theYearPassedIn <= 1992)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ count(theYearPassedIn, parseInt(eventsArray[15].theYear), 1) +"St. John\'s Regatta";
		}else if(theYearPassedIn > 1992){
			eventsArray[15].theMemo = "Civic Holiday, the "+ count(theYearPassedIn, parseInt(eventsArray[15].theYear), 1).toString() +"Royal St. John\'s Regatta";
		}
	}
	*/
	var countForRegattaDayMinusOne = count(theYearPassedIn, parseInt(eventsArray[15].theYear - 1), 1); // Regatta Day
		var countForRegattaDayAccurate = count(theYearPassedIn, eventsArray[15].theYear, 1);
		if(theYearPassedIn === 1818){
			eventsArray[15].theDate = 22;
			eventsArray[15].theMonth = 9;
			eventsArray[15].theMemo = "The "+ countForRegattaDayMinusOne +"official St. John\'s Regatta.<br />Held in September only that year to coincide with the<br />57th anniversary of King George III\'s official coronation";
		}else{
			eventsArray[15].theDate = NthDay(1, 4, 8, theYearPassedIn);
			eventsArray[15].theMonth = 8;
		}
		if(theYearPassedIn === 1940){
			eventsArray[15].theMemo = "There was NO Regatta in 1940 due to WWII";
		}else if((theYearPassedIn > 1818) && (theYearPassedIn < 1871)){
			eventsArray[15].theMemo = "The "+ countForRegattaDayMinusOne +"St. John\'s Regatta";
		}else if((theYearPassedIn > 1870) && (theYearPassedIn < 1940)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayMinusOne +"St. John\'s Regatta";
		}else if((theYearPassedIn > 1940) && (theYearPassedIn <= 1992)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayAccurate +"St. John\'s Regatta";
		}else if(theYearPassedIn > 1992){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayAccurate.toString() +"Royal St. John\'s Regatta";
		}
	
	
	if(parGivenMonth === 8){
		eventsArray[16].theDate = NthDay(1, 2, 9, theYearPassedIn); // Labour Day
	//	eventsArray[16].theMemo = "Statutory Holiday, Labour Day";
	}
	if(parGivenMonth === 9){
		eventsArray[17].theDate = NthDay(2, 2, 10, theYearPassedIn); // Thanksgiving Day
	//	eventsArray[17].theMemo = "Statutory Holiday, Thanksgiving Day";
	}
	if(((parGivenMonth === 8) || (parGivenMonth === 9) || (parGivenMonth === 10)) && (theYearPassedIn > 1916)){
		eventsArray[19].theMonth = evaluateDSTend().getMonth() + 1;
		eventsArray[19].theDate = evaluateDSTend().getDate();				// DST ends
		eventsArray[19].theMemo = "Daylight Saving Time (DST) Ends: "+ getDSTendTimeOfDay(theYearPassedIn) +" "+ getNewfoundlandTimeZoneName(evaluateDSTend(), "short");
	}
	if((parGivenMonth === 10) && (theYearPassedIn < 1931)){
		var theThe = theYearPassedIn > 1918 ? "Public Holiday, The " : ""; // My condensed if using conditional operator ? to evaluate whether to place the word "the" in variable theThe.
		var anniversaryYesNo = theYearPassedIn > 1918 ? "Anniversary of " : "";
		eventsArray[20].theMemo = theThe + count(theYearPassedIn, parseInt(eventsArray[20].theYear), 1) + anniversaryYesNo +"Armistice Day";
	}else if((parGivenMonth === 10) && (theYearPassedIn >= 1931)){	//Remembrance Day
		eventsArray[20].theMemo = "Public Holiday, The "+ count(theYearPassedIn, parseInt(eventsArray[20].theYear), 1) +"Day of Remembrance";
	}
	if((parGivenMonth === 11) && (theYearPassedIn > 1866)){
		eventsArray[25].theMemo = "Statutory Holiday, Xmas Day";
		eventsArray[26].theMemo = "Provincial Holiday, Boxing Day";
	}else if((parGivenMonth === 11) && (theYearPassedIn <= 1866)){
		eventsArray[25].theMemo = "Xmas Day";
		eventsArray[26].theMemo = "Boxing Day";
	}
	if((parGivenMonth === 8) && (theYearPassedIn > 2020)){
		if((NthDay(-1, 1, 9, theYearPassedIn) === 30) || (NthDay(-1, 7, 9, theYearPassedIn) === 30)){
			eventsArray[48].theMemo = "National Day for Truth and Reconciliation"; // Displays in black when 30th falls on a weekend only.
		}else{
			eventsArray[48].theMemo = "Holiday, National Day for Truth and Reconciliation"; // Displays whenever 30th falls from Monday - Friday.
		}
	}
}
