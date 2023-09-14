// Calendar Monthly Main JavaScript Document

	var currentCalendarDateObject = 0;

	function createMonth(theDateObjectPassedIn){
		'use strict';
		currentCalendarDateObject = theDateObjectPassedIn; // Take this passed-in date object external to allow for easy bad data trapping in navigation.
		var curMonth = currentCalendarDateObject.getMonth();
		var curYear = currentCalendarDateObject.getFullYear();
		reInitializeMainArrayItems(currentCalendarDateObject);
		var todayDateCheck = checkForUpdateToToday();
		var monLength = monthLength(currentCalendarDateObject); // number of days in month
		var lastDay = monLength;
		var previousMonthEndDate = 0;
		var previousMonthsLastDayCellNum = movePositionOfMonthStartDay(currentCalendarDateObject) - 1; // Cell index number of last date of previous month.
		if(curMonth === 0){ // Special case for looking at January and getting the last day of previous month which is December in previous year.
			previousMonthEndDate = highestDayInMonth(curYear - 1, 12); // Use function from nth day script because it allows you to pass in whatever month you want. The one in this script, monthLength() is locked to current month.
		}else{
			previousMonthEndDate = highestDayInMonth(curYear, curMonth); // curMonth is zero based, but function takes actual month number, so curMonth equals month number of previous month without needing to subtract 1 from it.
		}
		var moonPhasePreviousMonthsDatesArray = [];
		if(curMonth === 0){
			moonPhasePreviousMonthsDatesArray = generatePhaseDates(11, parseInt(curYear - 1));
		}else{
			moonPhasePreviousMonthsDatesArray = generatePhaseDates(parseInt(curMonth - 1), curYear);
		}
		var moonPhaseDatesArray = [];
			moonPhaseDatesArray = generatePhaseDates(curMonth, curYear);
		var moonPhaseNextMonthsDatesArray = [];
		if(curMonth === 11){
			moonPhaseNextMonthsDatesArray = generatePhaseDates(0, parseInt(curYear + 1));
		}else{
			moonPhaseNextMonthsDatesArray = generatePhaseDates(parseInt(curMonth + 1), curYear);
		}
		var concatenatedMoonPhasesArray = [];
		if((parseInt(curYear) === 1752) && (parseInt(curMonth) === 8)){
			concatenatedMoonPhasesArray = moonPhaseDatesArray.concat(moonPhaseNextMonthsDatesArray); // fixes issue where no moon data for month previous to September 1752
		}else{
			concatenatedMoonPhasesArray = moonPhasePreviousMonthsDatesArray.concat(moonPhaseDatesArray, moonPhaseNextMonthsDatesArray);	
		}
		var tablearea = document.getElementById('spaceForCalendar');
		var table = document.createElement('table');
		table.classList.add("calendar");
		var trow = document.createElement('tr');
		var th = document.createElement('th');
		trow.appendChild(th);
		th.setAttribute('colSpan', '7');
		th.classList.add("monthNameYearHeaderCell");
		if((LeapYear(curYear) === true) && (parseInt(curYear) > 1752)){ // Add month and leap year to top big header cell.
			var leapYearSpan = document.createElement('span');
			leapYearSpan.setAttribute("id", "leapYearInMonthHeaderCell"); // Assign an id to the span.
		//	leapYearSpan.innerHTML = "( leap year )"; // Alternate method. This works too. Assign text to span.
			leapYearSpan.appendChild(document.createTextNode("( leap year )")); // Assign text to span.
			th.appendChild(document.createTextNode(monthsArray[curMonth] + " " + curYear));
			th.appendChild(leapYearSpan); // Add leap year span and text to month name cell.
		}else{  // Add add month and regular year to top big header cell.
			th.appendChild(document.createTextNode(monthsArray[curMonth] + " " + curYear));
		}
		table.appendChild(trow);
		var tableRow = document.createElement('tr');
		for(var u = 0; u < 7; ++u){
			var headerCell = document.createElement('th');
			headerCell.appendChild(document.createTextNode(daysArray[u]));
			tableRow.appendChild(headerCell);
			if((u === 0) || (u === 6)){ // Sunday = 0, Saturday = 6.
				headerCell.classList.add("weekendCells");  // Add day names of weekend to header cells in second row.
			}else{
				headerCell.classList.add("weekdayCells"); 
			}
		}
		table.appendChild(tableRow);
		var startPosition = movePositionOfMonthStartDay(currentCalendarDateObject);
		// Building the 42 date blocks begins here.
		var incrementer = 0; // Updates in increments of 7 after each week row.
		for(var i = 0; i < 6; i++){
			var tr = document.createElement('tr');
			for(var c = 0; c < 7; c++){
				var currentBuildingTheDate = parseInt(incrementer + c + 1 - startPosition); // This line calculates date numbers for boxes of currently viewed month.
				if((parseInt(curYear) === 1752) && (parseInt(curMonth) === 8) && (currentBuildingTheDate > 2)){
					parseInt(currentBuildingTheDate += 11);
				}
				var buildTheDate = new Date(curYear, curMonth, currentBuildingTheDate, 12, 0, 0, 0);
				var td = document.createElement("td");
				var divDateNumberHolder = document.createElement("div");
				var divDateEventHolder = document.createElement("div");
				var divDateWordTodayHolder = document.createElement("div");
				tr.appendChild(td);
				if((currentBuildingTheDate > 0) && (currentBuildingTheDate <= lastDay)){
					if((c === 0) || (c === 6)){ // Because you're using an inner loop, this works too.
						td.classList.add("daysOfTheWeekend");
					}else{
						td.classList.add("daysOfTheWeek");
					}
				}
				if(createTableDateBlockBirthdayStyles(buildTheDate) !== ""){
					td.classList.add(createTableDateBlockBirthdayStyles(buildTheDate));
				}
				if(createTableDateBlockOccasionStyles(buildTheDate) !== ""){
					td.classList.add(createTableDateBlockOccasionStyles(buildTheDate));
				}
				if((buildTheDate.getDate() === checkForUpdateToToday().getDate()) && (buildTheDate.getMonth() === checkForUpdateToToday().getMonth()) && (buildTheDate.getFullYear() === checkForUpdateToToday().getFullYear())){
					td.classList.add("todaysDate");
				}
				td.appendChild(divDateNumberHolder);			
				divDateNumberHolder.classList.add(setDateNumberStyle(buildTheDate, c, currentBuildingTheDate, lastDay));
				var previousMonthCurDay = parseInt(previousMonthEndDate - previousMonthsLastDayCellNum + c + incrementer); // This line calculates date numbers for boxes of previous month. 30 - 5 + 0 + 0 For the whole first week incrementer remains at zero, 7 for second week, etc. This will be the first date on Sunday if it equals 25. If last day of previous month (30th) was a Friday. Zero based, 5 is cell number of Friday.
				var nextMonthCurDay = currentBuildingTheDate - lastDay; // This calculates the first few days of next month. i = current cell number, and lastDayIndex = cell number of last date of current month.			
				divDateNumberHolder.innerHTML = currentBuildingTheDate;		
				if((currentBuildingTheDate < 1) || (currentBuildingTheDate > lastDay)){ // This section controls the styles for other months date number text. This condensed version of the if block added Tuesday, the 31st of August, 2021.
					td.classList.remove("daysOfTheWeek");
					td.classList.remove("daysOfTheWeekend");
					td.classList.remove("birthdayOccasion");
					td.classList.remove("occasion");
					td.classList.remove("dateHoliday");
					td.classList.remove("dateTodayHoliday");
			//		td.className = "";
			//		td.removeAttribute("class"); // Removing classes using either of these two ways will have the unintended consequence of removing class today from the other months, so don't do it!
					td.classList.add("blank");
					if(currentBuildingTheDate < 1){
						divDateNumberHolder.innerHTML = previousMonthCurDay;
					}else if(currentBuildingTheDate > lastDay){
						divDateNumberHolder.innerHTML = nextMonthCurDay;
					}
					if(td.className.indexOf("todaysDate") !== -1){
						td.classList.remove("todaysDate");
						td.classList.add("otherMonthsTodaysDate");
						divDateNumberHolder.appendChild(divDateWordTodayHolder);
						divDateNumberHolder.classList.add("otherMonthsTodayDateNumber"); // New class to target and add bold font-weight to other months today date number. Created the 26th of April, 2023.
						divDateWordTodayHolder.innerHTML = "Today";
					}
				} // End of section that controls the styles for other months date number text.
				var moonPhaseName = ""; // These nine lines of code were restored to their original location, here from above, on 26th of April 2023 in order to set moon phase as class 1 on table cell after "blank" class, class 0.
				var moonPhaseInCalendarDateObject = "";				
				for(var q = 0; q < moonPhasePreviousMonthsDatesArray.length; q++){
					if(currentBuildingTheDate < 1){
						if((buildTheDate.getDate() === moonPhasePreviousMonthsDatesArray[q].phaseDate.getDate()) && (buildTheDate.getMonth() === moonPhasePreviousMonthsDatesArray[q].phaseDate.getMonth())){
							moonPhaseName = moonPhasePreviousMonthsDatesArray[q].phaseName;
							td.classList.add(setMoonBackgroundInCalendar(moonPhaseName, "blank"));
						}
					}
				} // end for
				for(var t = 0; t < moonPhaseDatesArray.length; t++){ // For the calendar table, this section sets moon phase class/style name and passes it to the function that sets the appropriate background in the calendar table. The rest of the code, sets text in the modal. See method createDateMemo() for section dealing with calendar moon phase text and createTableDateBlockStyles() for setting background images.
					if((buildTheDate.getDate() === moonPhaseDatesArray[t].phaseDate.getDate()) && (buildTheDate.getMonth() === moonPhaseDatesArray[t].phaseDate.getMonth())){
						moonPhaseName = moonPhaseDatesArray[t].phaseName;
						moonPhaseInCalendarDateObject = moonPhaseDatesArray[t].phaseDate;
						var theClassName = "";
						if(td.classList.item(3) === "todaysDate"){
							theClassName = td.classList.item(3);
						}else if(td.classList.item(2) === "todaysDate"){
							theClassName = td.classList.item(2); // Whenever today falls on a moon-phase with an occasion, the occasion will take classList item 1, but today always gets priority.
						}else if((td.classList.item(2) === "occasion") || (td.classList.item(2) === "dateHoliday") || (td.classList.item(2) === "dateTodayHoliday")){
							theClassName = td.classList.item(2);
						}else{
							theClassName = td.classList.item(1);
						}
						td.classList.add("eventMoonPhase");
						
						td.classList.add(setMoonBackgroundInCalendar(moonPhaseName, theClassName));
						
						if((moonPhaseDatesArray[t].phaseDate.getDate() === checkForUpdateToToday().getDate()) && (moonPhaseDatesArray[t].phaseDate.getMonth() === checkForUpdateToToday().getMonth()) && (moonPhaseDatesArray[t].phaseDate.getFullYear() === checkForUpdateToToday().getFullYear()) && (td.className.indexOf("dateTodayHoliday") !== -1)){ // This if added 7th of September 2021 to apply magenta and hover style to big day number on holiday occasion with moon phase in main calendar date block.
							divDateNumberHolder.classList.remove("todayNumber");
							divDateNumberHolder.classList.add("todayNumberWithMoonPhaseOnHoliday");
						}else if((moonPhaseDatesArray[t].phaseDate.getDate() === checkForUpdateToToday().getDate()) && (moonPhaseDatesArray[t].phaseDate.getMonth() === checkForUpdateToToday().getMonth()) && (moonPhaseDatesArray[t].phaseDate.getFullYear() === checkForUpdateToToday().getFullYear())){
							divDateNumberHolder.classList.remove("todayNumber");
							divDateNumberHolder.classList.add("todayNumberWithMoonPhase");
						}
					}
				}
				for(var u = 0; u < moonPhaseNextMonthsDatesArray.length; u++){
					if(currentBuildingTheDate > lastDay){
						if((buildTheDate.getDate() === moonPhaseNextMonthsDatesArray[u].phaseDate.getDate()) && (buildTheDate.getMonth() === moonPhaseNextMonthsDatesArray[u].phaseDate.getMonth())){
							moonPhaseName = moonPhaseNextMonthsDatesArray[u].phaseName;
							td.classList.add(setMoonBackgroundInCalendar(moonPhaseName, "blank"));
						}
					}
				}
				if((td.classList[0] === "blank") && (td.className.indexOf("cellBackgroundForBlank") !== -1)){ // If block added on 30th of August 2021 to use new style that moves position of word "Today" in other months "blank" (dummy days) to the right so it doesn't cover up moon icon in gray moon phase background.
					divDateWordTodayHolder.classList.add("wordTodayMoonPhaseOtherMonthsInCalendar");
				}else if((td.classList[0] === "blank") && (td.className.indexOf("cellBackgroundForBlank") === -1)){ // For other months "dummy day" cell blocks where word "Today" appears with no moon phase. 
					divDateWordTodayHolder.classList.add("wordTodayOtherMonthsInCalendarMemo"); 
				}
				// Comment out evaluation line in first portion of below if block to make all dates clickable. 1 of 4 places.
				if((td.className.indexOf("todaysDate") === -1) && ((td.className.indexOf("occasion") !== -1) || (td.className.indexOf("dateHoliday") !== -1) || (td.className.indexOf("birthdayOccasion") !== -1) || (td.className.indexOf("eventMoonPhase") !== -1))){  // The lines below store the date information in the cell as a value to the attribute named, data-date.
					td.setAttribute("data-date", buildTheDate);
				}else if(td.className.indexOf("todaysDate") !== -1){
					td.setAttribute("data-date", buildTheDate);
					divDateNumberHolder.appendChild(divDateWordTodayHolder);
					divDateWordTodayHolder.classList.add("wordTodayInCalendarMemo");
					divDateWordTodayHolder.innerHTML = "Today";
				}
				// Comment out evaluation line in if block below to make all dates clickable. 2 of 4 places.
				if((createModal) && ((td.className.indexOf("occasion") !== -1) || (td.className.indexOf("dateHoliday") !== -1) || (td.className.indexOf("birthdayOccasion") !== -1) || (td.className.indexOf("eventMoonPhase") !== -1) || (td.className.indexOf("todaysDate") !== -1))){
					td.addEventListener('click', function(e){
						var content = this.getAttribute("data-date");
						createModal(e, this, content, todayDateCheck);
					});
				}
				td.appendChild(divDateEventHolder);
				divDateEventHolder.classList.add("dateInfoHolder");
				divDateEventHolder.innerHTML = createDateMemo(buildTheDate, concatenatedMoonPhasesArray).replace(/\\/g, ""); // This line adds shortened memo to calendar date block.
			} // End inner for loop.
			incrementer += 7;
			table.appendChild(tr);				
		} // End outer for loop.
		tablearea.appendChild(table);
		// End of building the 42 date blocks.
	} // End method createMonth


	function createModal(theClickEvent, thisObject, theContent, dateObjectToday){
		var content = theContent;
		var arrayOfContents = content.split(" ");
		var monthNameIndex = -1;
		for(var f = 0; f < monthsArray.length; ++f){
			if(arrayOfContents[1].slice(0, 3) === monthsArray[f].slice(0, 3)){
				monthNameIndex = f;
			}
		}
		var modalDateObject = new Date(parseInt(arrayOfContents[3]), parseInt(monthNameIndex), parseInt(arrayOfContents[2])); // arrayOfContents[3] is the year, monthNameIndex is month number (0 to 11), and arrayOfContents[2] is  the date of the month.
		var modalYear = modalDateObject.getFullYear();
		var modalMonth = modalDateObject.getMonth();
		var modalDateOfMonth = modalDateObject.getDate();
		var yearToday = dateObjectToday.getFullYear();
		var monthToday = dateObjectToday.getMonth();
		var dateOfMonthToday = dateObjectToday.getDate();
		var moonPhaseName = "";
		var arrayOfMoonPhaseDates = [];
		arrayOfMoonPhaseDates = generatePhaseDates(modalMonth, modalYear);
		for(var m = 0; m < arrayOfMoonPhaseDates.length; ++m){
			if((modalDateOfMonth === arrayOfMoonPhaseDates[m].phaseDate.getDate()) && (modalMonth === arrayOfMoonPhaseDates[m].phaseDate.getMonth())){
				moonPhaseName = arrayOfMoonPhaseDates[m].phaseName;
			}
		}
		var theModal = document.querySelector(".modal"); // Do not remove the dot. The syntax uses the dot or the hash. This is the transparent black full-window modal div. This line returns the clicked modal element within the document that matches the modal selector and stores it in varible theModal.
		theModal.innerHTML = ""; // Remove all content from div model before creating a new one.
		var xToCloseElement = document.createElement("span"); // Dynamically create class close-X span and append it inside class modal div.
		xToCloseElement.classList.add("close-X");
		xToCloseElement.innerHTML = "";
		xToCloseElement.innerHTML = "&times;"; // Add the X to the modal window.
	//	xToCloseElement.setAttribute("onClick", "toggleModal(theModal);"); // This line calls the function to toggle close the modal using the X by removing class "show-modal".
		xToCloseElement.addEventListener("click", function(){
			toggleModal(theModal);
		});
		theModal.appendChild(xToCloseElement); // Place span element containing the closing X inside the outer full-size modal div.
		var modalContentHolder = document.createElement("div"); // This is the centred white modal box. These two lines dynamically create it, and assign class "modal-content". 
		modalContentHolder.classList.add("modal-content");
		var insideGraphicHolder = document.createElement("div");
		insideGraphicHolder.setAttribute("id", "sideGraphicContainer");
		modalContentHolder.appendChild(insideGraphicHolder);
		var theDateClicked = document.createElement("div");
		theDateClicked.classList.add("dateClicked");
		var youClickedText = document.createElement("span");
		youClickedText.classList.add("whatYouClickedBolded");
		youClickedText.style.fontWeight = "bold"; // Comment out if-block, evaluation line below to make all dates clickable. 3 of 4 places.
		var theBigDateNumber = document.createElement("div");
		theBigDateNumber.classList.add("bigDateNumber");
		var theDateMemo = document.createElement("div");
		theDateMemo.classList.add("dateModalInfoHolder");
		theDateMemo.insertAdjacentHTML("afterbegin", createModalDateMemo(modalDateObject, yearToday, monthToday, dateOfMonthToday));
		var theMoonPhase = document.createElement("div");
		theMoonPhase.classList.add("nameOfMoonPhase");
		theMoonPhase.insertAdjacentHTML("beforeend", moonPhaseName);
		var buttonElement = document.createElement("button");
		buttonElement.classList.add("htmlCloseButton");
		buttonElement.appendChild(document.createTextNode("Close"));
	//	buttonElement.setAttribute("onClick", "toggleModal(theModal);"); // This line calls the function to toggle close the modal using the Close button by removing class "show-modal".
		buttonElement.addEventListener("click", function(){
			toggleModal(theModal);
		});
		youClickedText.appendChild(document.createTextNode("You clicked: "));
		theBigDateNumber.appendChild(document.createTextNode(modalDateOfMonth));
		if((modalDateOfMonth === dateOfMonthToday) && (modalMonth === monthToday) && (modalYear === yearToday)){
			youClickedText.innerHTML = "";
			youClickedText.appendChild(document.createTextNode("Today: "));
			theDateClicked.appendChild(youClickedText);
			var theWordToday = document.createElement("div");
			theWordToday.classList.add("wordTodayModalMemo");
			theWordToday.appendChild(document.createTextNode("Today"));
			var todaysDayCountInfo = document.createElement("div");
			todaysDayCountInfo.setAttribute("id", "theDayCounter");
			todaysDayCountInfo.insertAdjacentHTML("beforeend", calculateModalDayPosition(modalYear, modalMonth, modalDateOfMonth));
			modalContentHolder.appendChild(theWordToday);
			modalContentHolder.appendChild(todaysDayCountInfo);
		}
		theDateClicked.appendChild(youClickedText);
		theDateClicked.insertAdjacentHTML("beforeend", daysArray[modalDateObject.getDay()] +", the "+ modalDateOfMonth +"<sup>"+ determineDateSuffix(modalDateOfMonth) +"</sup> of "+ monthsArray[modalMonth] +", "+ modalYear +".");			
		modalContentHolder.appendChild(theDateClicked); // Adding items to dateContent div begins here.
		modalContentHolder.appendChild(theBigDateNumber);
		modalContentHolder.appendChild(theDateMemo);
		modalContentHolder.appendChild(theMoonPhase); // End of adding items to dateContent div.
		modalContentHolder.appendChild(buttonElement); // Store Close button in modal-content div.
		theModal.appendChild(modalContentHolder); // Place div for modal-content inside modal div below span for the closing X.
		createModalBackgroundStyles(thisObject.classList.item(0), thisObject.classList.item(1), thisObject.classList.item(2), thisObject.classList.item(3));
		createModalMemoStyles(thisObject.classList.item(0), thisObject.classList.item(1), thisObject.classList.item(2), thisObject.classList.item(3));
		if((modalDateOfMonth === dateOfMonthToday) && (modalMonth === monthToday) && (modalYear === yearToday)){
			createModalMemoTodayStyles(thisObject.classList.item(1), thisObject.classList.item(2), thisObject.classList.item(3), thisObject.classList.item(4));
		} // Comment out evaluation line in if block below to make all dates clickable. 4 of 4 places.
		if((thisObject.className.indexOf("occasion") !== -1) || (thisObject.className.indexOf("dateHoliday") !== -1) || (thisObject.className.indexOf("birthdayOccasion") !== -1) || (thisObject.className.indexOf("eventMoonPhase") !== -1) || (thisObject.className.indexOf("todaysDate") !== -1)){ // Restrict which calendar dates can open a modal window here.  Comment out to display modal for all dates: 2 of 4.
			toggleModal(theModal); // When a date box with an occasion is clicked, this call to the function will toggle open the modal by adding class "show-modal" which sets the css property "visibility:" to "visible;".
		//	modal.classList.toggle("show-modal"); // This line opens the modal.
		} // End of if that restricts which calendar dates can open a modal window to only specified occasion dates.
	} // end method createModal()
	
	function toggleModal(theModalPassedIn){
		'use strict';
		theModalPassedIn.classList.toggle("show-modal"); // This line opens or closes the modal by adding or removing class "show-modal" thereby switching, on or off (toggling), the visibility of the modal which uses the availability of the css property "visibility:" visible; to show or hide it.
	}
	
	function determineDateSuffix(numberToCheck){
		"use strict";
		var theSuffix = "";
		var tenRemainder = numberToCheck % 10;
		var hundredRemainder = numberToCheck % 100;
		if((tenRemainder === 1) && (hundredRemainder !== 11)){
			theSuffix = "st";
		}else if((tenRemainder === 2) && (hundredRemainder !== 12)){
			theSuffix = "nd";
		}else if((tenRemainder === 3) && (hundredRemainder !== 13)){
			theSuffix = "rd";
		}else{
			theSuffix = "th";
		}
		return theSuffix;
	}

	function movePositionOfMonthStartDay(passedInDateObject){
		'use strict';
		var thePassedInDate = new Date(passedInDateObject);
		var theDateObject = new Date();
		var currentDateOfMonth = theDateObject.getDate();
		thePassedInDate.setDate(1);
		var monthStartDay = thePassedInDate.getDay();
		var weekMoveEarlyCutoffDate = 8;
		var weekMoveLateBeginDate = 21;
		var startDay = 0;
		if((thePassedInDate.getFullYear() === 1752) && (thePassedInDate.getMonth() === 8)){
			startDay = monthStartDay + 4; // For September 1st, 1752 this moves Julian month start date to Tuesday in the second row.
		}else if((currentDateOfMonth < weekMoveEarlyCutoffDate) && (thePassedInDate.getMonth() === checkForUpdateToToday().getMonth()) && (parseInt(thePassedInDate.getFullYear()) === checkForUpdateToToday().getFullYear()) && ((monthStartDay < 5) || ((monthStartDay < 6) && (monthLength(thePassedInDate) < 31)) || ((monthStartDay < 7) && (monthLength(thePassedInDate) < 30)))){ // For earlier than the 16th of current month, if this if evaluates true it will move start day one week later so gray week will be located at the top of calendar to show last week of previous month.
			if((monthStartDay === 0) && (monthLength(passedInDateObject) === 28)){
				startDay = monthStartDay + 14; // Special condition to drop down two weeks when current month is an even four week February with the 1st on a Sunday.
			}else{
				startDay = monthStartDay + 7;
			}
		}else if((currentDateOfMonth > weekMoveLateBeginDate) && (thePassedInDate.getMonth() === checkForUpdateToToday().getMonth()) && (thePassedInDate.getFullYear() === checkForUpdateToToday().getFullYear())){ // For later than the 15th of current month, leave start day in first week so gray week will be located at the bottom of calendar to show first week of next month.
			startDay = monthStartDay;
		}else if(monthStartDay < 3){ // For all months except current month, if this if evaluates true, move start day one week later. 3 references weekday or cell number of first day of month. In this case, Sunday is 0 and 2 is Tuesday. Fix for if current month is February
			startDay = monthStartDay + 7; // Add extra line above month by moving startDay seven days later.
		}else if((monthStartDay === 3) && (thePassedInDate.getMonth() === 1) && (monthLength(passedInDateObject) === 28)){ // When a 28 day February starts on a Wednesday, monthStartDay === 3, position gray week on top. It simply looks better. Fix added on 9th of February 2023.
			startDay = monthStartDay + 7;
		}else{
			startDay = monthStartDay;	// Corresponds to cell index number of first weekday of the month 0 = Sunday, 1 = Monday..., 6 = Saturday
		}
		return startDay;
	}

	function monthLength(aDateObjectIn){
		'use strict';
		var monthDaysLength = 0;
		if((aDateObjectIn.getMonth() === 3) || (aDateObjectIn.getMonth() === 5) || (aDateObjectIn.getMonth() === 8) || (aDateObjectIn.getMonth() === 10)){
			monthDaysLength = 30;
		}else if(aDateObjectIn.getMonth() === 1){
			if(LeapYear(aDateObjectIn.getFullYear()) === false){ // call LeapYear() function from nth day script because nth day uses a complete and thorough algorithm.
				monthDaysLength = 28;
			}else{
				monthDaysLength = 29;
			}
		}else{
			monthDaysLength = 31;
		}
		return monthDaysLength;
	}
	
	
	document.addEventListener("DOMContentLoaded", function(){
		'use strict';
		var todayDate = new Date();
		createNavigationElements(todayDate);
		createMonth(todayDate);
	});
	
	
	