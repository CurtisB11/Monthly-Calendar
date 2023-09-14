// Calendar Monthly Events JavaScript Document

var monthsArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var daysArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

	// format: (dd, mm, yyyy, "event", memoNumber, typeOfEvent)
var eventsArray = new Array();
	eventsArray[0] = new makeEvent(20, 3, 1753, "Spring", 2, "occ");
	eventsArray[1] = new makeEvent(21, 6, 1753, "Summer", 2, "occ");
	eventsArray[2] = new makeEvent(22, 9, 1752, "Fall", 2, "occ");
	eventsArray[3] = new makeEvent(21, 12, 1752, "Winter", 2, "occ");
	eventsArray[4] = new makeEvent(1, 1, 1752, "New Year\'s Day", 1, "hol");
	eventsArray[5] = new makeEvent(6, 3, 1752, "Pancake Day%(Shrove Tuesday)", 2, "occ");
	eventsArray[6] = new makeEvent(3, 3, 1974, "Treena\'s Birthday", 1, "bir");
	eventsArray[7] = new makeEvent(14, 2, 1753, "Valentine\'s Day", 1, "occ");
	eventsArray[8] = new makeEvent(10, 6, 1917, "Daylight Saving%Time (DST) Begins", 2, "occ");
	eventsArray[9] = new makeEvent(20, 4, 1753, "Good Friday", 2, "hol");
	eventsArray[10] = new makeEvent(22, 4, 1753, "Easter Sunday", 2, "occ");
	eventsArray[11] = new makeEvent(10, 5, 1908, "Mother\'s Day", 2, "occ");
	eventsArray[12] = new makeEvent(24, 5, 1845, "Victoria Day", 1, "hol");
	eventsArray[13] = new makeEvent(19, 6, 1910, "Father\'s Day", 1, "occ");
	eventsArray[14] = new makeEvent(1, 7, 1867, "Dominion Day", 2, "hol");
	eventsArray[15] = new makeEvent(5, 8, 1818, "Regatta", 2, "occ");
	eventsArray[16] = new makeEvent(4, 9, 1882, "Labour Day", 2, "hol");
	eventsArray[17] = new makeEvent(14, 10, 1957, "Thanksgiving Day", 2, "hol");
	eventsArray[18] = new makeEvent(31, 10, 1752, "Hallowe\'en", 1, "occ");
	eventsArray[19] = new makeEvent(30, 9, 1917, "Daylight Saving%Time (DST) Ends", 2, "occ");
	eventsArray[20] = new makeEvent(11, 11, 1918, "Armistice Day", 1, "hol");
	eventsArray[21] = new makeEvent(27, 11, 1967, "Karen\'s Birthday", 1, "bir");
	eventsArray[22] = new makeEvent(30, 11, 1943, "Mudder\'s Birthday", 1, "bir");
	eventsArray[23] = new makeEvent(9, 12, 1937, "Dad\'s Birthday", 1, "bir");
	eventsArray[24] = new makeEvent(24, 12, 1752, "Xmas Eve", 1, "occ");
	eventsArray[25] = new makeEvent(25, 12, 1752, "Xmas Day", 1, "hol");
	eventsArray[26] = new makeEvent(26, 12, 1752, "Boxing Day", 1, "hol");
	eventsArray[27] = new makeEvent(17, 3, 1752, "St. Patrick\'s Day", 1, "hol");
	eventsArray[28] = new makeEvent(23, 4, 1752, "St. George\'s Day", 1, "hol");
	eventsArray[29] = new makeEvent(24, 6, 1962, "Discovery Day", 1, "hol");
	eventsArray[30] = new makeEvent(12, 7, 1752, "Orangeman\'s Day", 1, "hol");
	eventsArray[31] = new makeEvent(22, 8, 1962, "Mom and Dad\'s%Wedding Day", 1, "wed");
	eventsArray[32] = new makeEvent(1, 7, 1916, "Beaumont Hamel", 1, "occ");
	eventsArray[33] = new makeEvent(29, 9, 1981, "Jennifer\'s Birthday", 1, "bir");
	eventsArray[34] = new makeEvent(13, 12, 1974, "Nicky\'s Birthday", 1, "bir");
	eventsArray[35] = new makeEvent(17, 7, 1969, "Andrea\'s Birthday", 1, "bir");
	eventsArray[36] = new makeEvent(3, 9, 1971, "Marleen\'s Birthday", 1, "bir");
	eventsArray[37] = new makeEvent(20, 10, 1994, "Cheryl\'s Birthday", 1, "bir");
	eventsArray[38] = new makeEvent(16, 8, 1968, "Jim\'s Birthday", 1, "bir");
	eventsArray[39] = new makeEvent(31, 12, 1752, "New Year\'s Eve", 1, "occ");
	eventsArray[40] = new makeEvent(1, 4, 1752, "April Fools\' Day", 1, "occ");
	eventsArray[41] = new makeEvent(2, 2, 1841, "Groundhog Day", 1, "occ");
	eventsArray[42] = new makeEvent(12, 3, 1986, "Jada\'s Birthday", 1, "bir");
	eventsArray[43] = new makeEvent(2, 9, 2008, "James and%Evan\'s Birthday", 1, "bir");
	eventsArray[44] = new makeEvent(9, 8, 2018, "Karen and Rh&#233;al\'s%Wedding Day", 1, "wed");
	eventsArray[45] = new makeEvent(5, 11, 1961, "Rh&#233;al\'s Birthday", 1, "bir");
	eventsArray[46] = new makeEvent(21, 2, 1968, "Dean\'s Birthday", 1, "bir");
	eventsArray[47] = new makeEvent(10, 10, 1964, "Terri\'s Birthday", 1, "bir");
	eventsArray[48] = new makeEvent(30, 9, 2021, "NDTR", 2, "occ");
	eventsArray[49] = new makeEvent(16, 7, 1987, "Brenda\'s Birthday", 1, "bir");
	eventsArray[50] = new makeEvent(6, 5, 1914, "Grandma\'s Birthday", 1, "bir");
	eventsArray[51] = new makeEvent(9, 11, 1908, "Grandfather\'s Birthday", 1, "bir");
	eventsArray[52] = new makeEvent(29, 5, 1967, "Mark\'s Birthday", 1, "bir");
	eventsArray[53] = new makeEvent(17, 5, 1962, "Richard\'s Birthday", 1, "bir");
	eventsArray[54] = new makeEvent(8, 5, 1960, "Stephen\'s Birthday", 1, "bir");
//	eventsArray[55] = new makeEvent(10, 6, 1971, "Testing\'s Birthday", 1, "bir");

// create event object
function makeEvent(date, month, year, memo, flag, type){
	'use strict';
	this.theDate = date;
	this.theMonth = month;
	this.theYear = year;
	this.theMemo = memo;
	this.theFlag = flag;
	this.theType = type;
}

function createTableDateBlockBirthdayStyles(aDateObjectPassedIn){
	'use strict';
	var theBirthdayStyle = "";
	var yearIn = aDateObjectPassedIn.getFullYear();
	var dateIn = aDateObjectPassedIn.getDate();
	var monthIn = aDateObjectPassedIn.getMonth();
	var todayDateCheck = checkForUpdateToToday();
	var todayYear = checkForUpdateToToday().getFullYear();
	var todayMonth = checkForUpdateToToday().getMonth();
	var todayDate = checkForUpdateToToday().getDate();
	for(var i = 0; i < eventsArray.length; i++){
		if((eventsArray[i].theDate === dateIn) && (eventsArray[i].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[i].theYear)){
			if((((yearIn <= parseInt(eventsArray[i].theYear + 100)) && (eventsArray[i].theMemo.indexOf("Wedding") !== -1)) || ((yearIn <= parseInt(eventsArray[i].theYear + 120)) && (eventsArray[i].theMemo.indexOf("Birthday") !== -1)))){
				theBirthdayStyle = "birthdayOccasion";
			}
		}
	} // end for loop
	return theBirthdayStyle;
}

function createTableDateBlockOccasionStyles(aDateObjectPassedIn){
	'use strict';
	var theOccasionStyle = "";
	var yearIn = aDateObjectPassedIn.getFullYear();
	var dateIn = aDateObjectPassedIn.getDate();
	var monthIn = aDateObjectPassedIn.getMonth();
	var todayDateCheck = checkForUpdateToToday();
	var todayYear = checkForUpdateToToday().getFullYear();
	var todayMonth = checkForUpdateToToday().getMonth();
	var todayDate = checkForUpdateToToday().getDate();
	for(var i = 0; i < eventsArray.length; i++){
		if((eventsArray[i].theDate === dateIn) && (eventsArray[i].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[i].theYear)){
			if(eventsArray[i].theMemo !== "Today"){
				if((eventsArray[i].theMemo.indexOf("Birthday") === -1) && (eventsArray[i].theMemo.indexOf("Wedding") === -1)){
					theOccasionStyle = "occasion";
				}
			}
		}
	} // end for loop
	// Part 1: Due to its length, I split this if block into two seperate sections:
	if(((dateIn === 1)&&(monthIn === 0)&&(yearIn > 1866))||(dateIn === setNewYearsHolidayDate(monthIn, yearIn))||(dateIn === setPaddysDayHolidayDate(monthIn, yearIn))||(dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn))||((dateIn === evaluateGoodFriday(yearIn).getDate())&&(monthIn === evaluateGoodFriday(yearIn).getMonth())&&(yearIn > 1866))||(dateIn === setVictoriaDayHolidayDate(monthIn, yearIn))||((dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn)))||((dateIn === 1)&&(monthIn === 6)&&(yearIn > 1878))||(dateIn === setCanadaDayHolidayDate(monthIn, yearIn))||(dateIn === setOrangemansDayHolidayDate(monthIn, yearIn))){
		if((dateIn === checkForUpdateToToday().getDate()) && (monthIn === checkForUpdateToToday().getMonth()) && (yearIn === checkForUpdateToToday().getFullYear())){
			theOccasionStyle = "dateTodayHoliday";
		}else{
			theOccasionStyle = "dateHoliday";
		}		
	}
	// Part 2
	if(((dateIn === setRegattaDayHolidayDate(monthIn, yearIn))&&(yearIn !== 1940))||(dateIn === setLabourDayHolidayDate(monthIn, yearIn))||(dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn))||(dateIn === setThanksgivingDayHolidayDate(monthIn, yearIn))||((dateIn === 11)&&(monthIn === 10)&&(yearIn > 1918))||(dateIn === setRemembranceDayHolidayDate(monthIn, yearIn))||((dateIn === 25)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setXmasDayHolidayDate(monthIn, yearIn))||((dateIn === 26)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setBoxingDayHolidayDate(monthIn, yearIn))){
		if((dateIn === checkForUpdateToToday().getDate()) && (monthIn === checkForUpdateToToday().getMonth()) && (yearIn === checkForUpdateToToday().getFullYear())){
			theOccasionStyle = "dateTodayHoliday";
		}else{
			theOccasionStyle = "dateHoliday";
		}
	}
//	memoCount = 0;
	return theOccasionStyle;
}
	
function setDateNumberStyle(aDateObjectIn, dayOfWeekIn, dateBeingBuiltPassedIn, endDateOfMonthIn){
	'use strict';
	var theDateNumberStyle;
	var todayYear = checkForUpdateToToday().getFullYear();
	var todayMonth = checkForUpdateToToday().getMonth();
	var todayDate = checkForUpdateToToday().getDate();
	var yearIn = aDateObjectIn.getFullYear();
	var monthIn = aDateObjectIn.getMonth();
	var dateIn = aDateObjectIn.getDate();
	if((dateBeingBuiltPassedIn < 1) || (dateBeingBuiltPassedIn > endDateOfMonthIn)){
		theDateNumberStyle = "otherMonthsDateNumber";
	}else if((aDateObjectIn.getDate() === todayDate) && (monthIn === todayMonth) && (yearIn === todayYear)){
		theDateNumberStyle = "todayNumber";
	}else if((((dateIn === 1)&&(monthIn === 0)&&(yearIn > 1866))||(dateIn === setNewYearsHolidayDate(monthIn, yearIn))||(dateIn === setPaddysDayHolidayDate(monthIn, yearIn))||(dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn))||((dateIn === evaluateGoodFriday(yearIn).getDate())&&(monthIn === evaluateGoodFriday(yearIn).getMonth())&&(yearIn > 1866))||(dateIn === setVictoriaDayHolidayDate(monthIn, yearIn))||((dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn)))||((dateIn === 1)&&(monthIn === 6)&&(yearIn > 1878))||(dateIn === setCanadaDayHolidayDate(monthIn, yearIn))||(dateIn === setOrangemansDayHolidayDate(monthIn, yearIn)))){
		theDateNumberStyle = "dateHolidayNumber";
	}else if((((dateIn === setRegattaDayHolidayDate(monthIn, yearIn))&&(yearIn !== 1940))||(dateIn === setLabourDayHolidayDate(monthIn, yearIn))||(dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn))||(dateIn === setThanksgivingDayHolidayDate(monthIn, yearIn))||((dateIn === 11)&&(monthIn === 10)&&(yearIn > 1918))||(dateIn === setRemembranceDayHolidayDate(monthIn, yearIn))||((dateIn === 25)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setXmasDayHolidayDate(monthIn, yearIn))||((dateIn === 26)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setBoxingDayHolidayDate(monthIn, yearIn)))){
		theDateNumberStyle = "dateHolidayNumber";
	}else if(!(dayOfWeekIn % 7) || !((dayOfWeekIn + 1) % 7)){	// get either one of both days of a weekend.
		theDateNumberStyle = "weekendNumber";
	}else{
		theDateNumberStyle = "daysOfWeekNumber";
	}
	return theDateNumberStyle;
}

function createDateMemo(aDateObjectIn, arrayAllMoonPhasesIn){
	'use strict';
	var occasionMemoOne = "";
	var occasionMemoTwo = "";
	var occasionMemoToday = "";
	var concatenatedMemos = "";
	var yearIn = aDateObjectIn.getFullYear();
	var monthIn = aDateObjectIn.getMonth();
	var dateIn = aDateObjectIn.getDate();
	var dayIn = aDateObjectIn.getDay();
	var oneOccasionStyleIdentifer = "oneOccasion";
	var twoOccasionStyleIdentifier = "twoOccasion";
	var memoBreak = new RegExp(/%/);
	var isCountNumber = new RegExp(/\d+/);
	var moonPhaseCalendarName = "";
	var moonPhaseNameWithTime = "";
	for(var t = 0; t < arrayAllMoonPhasesIn.length; t++){
		if((dateIn === arrayAllMoonPhasesIn[t].phaseDate.getDate()) && (monthIn === arrayAllMoonPhasesIn[t].phaseDate.getMonth())){
			moonPhaseNameWithTime = arrayAllMoonPhasesIn[t].phaseName;
			moonPhaseCalendarName = moonPhaseNameWithTime.substr(0, moonPhaseNameWithTime.indexOf(":"));
		}
	}
	for(var m = 0; m < eventsArray.length; m++){
		var eventsArrayDate = eventsArray[m].theDate;
		var eventsArrayMonth = eventsArray[m].theMonth;
		var eventsArrayYear = eventsArray[m].theYear;
		var eventsArrayFullMemo = eventsArray[m].theMemo;
		var eventsArrayFlag = eventsArray[m].theFlag;
		var isBreak = memoBreak.test(eventsArrayFullMemo); // The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
		var firstLineString = eventsArrayFullMemo.substr(0, eventsArrayFullMemo.indexOf("%"));
		var secondLineString = eventsArrayFullMemo.substring(eventsArrayFullMemo.indexOf("%") + 1);
		if((isBreak === true) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (eventsArrayFullMemo.indexOf("Birthday") === -1)){ // Birthday === -1 added to block birthday occasions from this if. Did this because two line birthdays were printing text in main calendar blocks after 120 years. Added 23rd October, 2021.
			if(((eventsArrayFullMemo.indexOf("Wedding") !== -1) || (eventsArrayFullMemo.indexOf("Beaumont") !== -1)) && (yearIn === eventsArrayYear)){
				occasionMemoOne = firstLineString +"<br />"+ secondLineString;
			}else if((eventsArrayFullMemo.indexOf("Wedding") !== -1) && (yearIn > eventsArrayYear) && (yearIn <= parseInt(eventsArrayYear) + 100)){
				occasionMemoOne = firstLineString +"<br />"+ secondLineString.substring(0, secondLineString.indexOf("Wedding")) + count(yearIn, parseInt(eventsArrayYear), 1) +"Anniversary";
			}else if((eventsArrayFlag === 2) && (yearIn >= eventsArrayYear)){
				occasionMemoTwo = firstLineString +"<br />"+ secondLineString;
			}else if((eventsArrayFlag === 1) && (yearIn >= eventsArrayYear) && (eventsArrayFullMemo.indexOf("Wedding") === -1)){ // Wedding === -1 added to block wedding occasions from this if. Did this because weddings were printing text in main calendar blocks after 100 years. Added 23rd October, 2021.
				occasionMemoOne = firstLineString +"<br />"+ secondLineString;
			}
		}else if((eventsArrayFullMemo.indexOf("Birthday") !== -1) && (yearIn >= eventsArrayYear)){
			if((isBreak === false) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn <= parseInt(eventsArrayYear) + 120)){
				occasionMemoOne = eventsArrayFullMemo; // display birthdays in main calendar blocks without age count.
			//	occasionMemoOne = eventsArrayFullMemo.substring(0, eventsArrayFullMemo.indexOf("Birthday")).replace("%", " ") +" "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) + eventsArrayFullMemo.slice(-8) +"."; // Add age count to birthdays in main calendar blocks.
			}else if((isBreak === true) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn <= parseInt(eventsArrayYear) + 120)){ // Added this if to handle two line birthdays on 23rd October, 2021.
				occasionMemoOne = firstLineString +"<br />"+ secondLineString; // display two line birthdays in main calendar blocks without age count.
			//	occasionMemoOne = eventsArrayFullMemo.substring(0, eventsArrayFullMemo.indexOf("Birthday")).replace("%", " ") +" "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) + eventsArrayFullMemo.slice(-8) +"."; // Add age count to two line birthdays in main calendar blocks. Break marker % is ignored and removed.
			}
		}else if((eventsArrayFullMemo.match(isCountNumber) !== null) && (eventsArrayFullMemo.indexOf("Dominion") === -1) && (eventsArrayFullMemo.indexOf("Canada") === -1) && (eventsArrayFullMemo.indexOf("Rh&#233;al\\'s") === -1) && (eventsArrayFullMemo.indexOf("Spring") === -1) && (eventsArrayFullMemo.indexOf("Summer") === -1) && (eventsArrayFullMemo.indexOf("Fall") === -1) && (eventsArrayFullMemo.indexOf("Winter") === -1) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn >= eventsArrayYear)){
			occasionMemoOne = eventsArrayFullMemo;
		}else if((eventsArrayFlag === 3) && ((eventsArrayDate !== dateIn) || (eventsArrayMonth !== (monthIn + 1)) || (yearIn !== eventsArrayYear))){
			occasionMemoToday = "";
		}else if((eventsArrayFlag === 3) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn === eventsArrayYear)){
			occasionMemoToday = eventsArrayFullMemo;
		}else if((eventsArrayFlag === 2) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn >= eventsArrayYear)){
			occasionMemoTwo = eventsArrayFullMemo;
		}else if((eventsArrayFlag === 1) && (eventsArrayDate === dateIn) && (eventsArrayMonth === (monthIn + 1)) && (yearIn >= eventsArrayYear)){
			occasionMemoOne = eventsArrayFullMemo;
		}
	} // End for loop
	
	if((dateIn === setNewYearsHolidayDate(monthIn, yearIn)) && (yearIn > 1866)){
		if(dateIn !== 1){
			occasionMemoOne = "Holiday for NYD"; // Holiday memo for New Year's Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setPaddysDayHolidayDate(monthIn, yearIn)) && (yearIn > 1948)){
		if(dateIn !== 17){
			occasionMemoOne = "Provincial Holiday"; // Holiday memo for St. Patrick's Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === evaluateGoodFriday(yearIn).getDate()) && (monthIn === evaluateGoodFriday(yearIn).getMonth()) && (yearIn > 1866)){ // Only designate "Statutory Holiday" status to Good Friday memo from year 1867 onward.
		twoOccasionStyleIdentifier = "twoOccasionHoliday";
	}else if((dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn)) && (yearIn > 1948)){
		if(dateIn !== 23){
			occasionMemoOne = "Provincial Holiday"; // Holiday memo for St. George's Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setVictoriaDayHolidayDate(monthIn, yearIn)) && (yearIn > 1951)){
		if(dateIn !== 24){
			occasionMemoOne = "Public Holiday"; // Holiday memo for Victoria Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn)) && (yearIn > 1961)){
		if(dateIn !== 24){
			occasionMemoOne = "Provincial Holiday"; // Holiday memo for Discovery Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setCanadaDayHolidayDate(monthIn, yearIn)) && (yearIn > 1866)){
		if((dateIn !== 1) && (yearIn > 1981)){
			occasionMemoTwo = "Holiday for CD"; // Holiday memo for Canada Day.
		}else if((dateIn !== 1) && (yearIn < 1982)){
			occasionMemoTwo = "Holiday for DD"; // Holiday memo for Dominion Day.
		}
		twoOccasionStyleIdentifier = "twoOccasionHoliday";
	}else if((parseInt(dateIn) === setOrangemansDayHolidayDate(monthIn, yearIn)) && (yearIn > 1948)){
		if(dateIn !== 12){
			occasionMemoOne = "Provincial Holiday"; // Holiday memo for Orangeman's Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if(((dateIn === 2) || (dateIn === 1)) && (dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn)) && (yearIn > 2020)){
		occasionMemoTwo = setModalHolidayMemos(occasionMemoTwo, 48).replace(".", ""); // Holiday memo for National Day for Truth and Reconciliation.
	}else if((dateIn === setRemembranceDayHolidayDate(monthIn, yearIn)) && (yearIn > 1918)){
		if(dateIn !== 11){
			if(yearIn < 1931){
				occasionMemoOne = "Holiday for AD";  // Holiday memo for Armistice Day.
			}else if(yearIn >= 1931){
				occasionMemoOne = "Holiday for RD";  // Holiday memo for Remembrance Day.
			}
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setXmasDayHolidayDate(monthIn, yearIn)) && (yearIn > 1866)){
		if(dateIn !== 25){
			occasionMemoOne = "Holiday for Xmas"; // Holiday memo for Xmas Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}else if((dateIn === setBoxingDayHolidayDate(monthIn, yearIn)) && (yearIn > 1866)){
		if(dateIn !== 26){
			occasionMemoOne = "Holiday for BD"; // Holiday memo for Boxing Day.
		}
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}
	// Section below sets the few remaining holidays, like when they fall on weekends, or for which there was no need to, or some reason NOT to, create a setter method to place their date.
	if(((occasionMemoOne.indexOf("Holiday") !== -1) || (occasionMemoOne.indexOf("Year\'s Day") !== -1) || ((occasionMemoOne.indexOf("Regatta") !== -1) && (yearIn > 1870)) || ((yearIn > 1918) && (occasionMemoOne.indexOf("Armistice") !== -1)) || (occasionMemoOne.indexOf("Remembrance") !== -1) || (occasionMemoOne.indexOf("Xmas Day") !== -1) || (occasionMemoOne.indexOf("Boxing") !== -1)) && (yearIn > 1866)){
		oneOccasionStyleIdentifer = "oneOccasionHoliday";
	}
	if(((occasionMemoTwo.indexOf("Holiday") !== -1) || (occasionMemoTwo.indexOf("Dominion") !== -1) || (occasionMemoTwo.indexOf("Canada") !== -1) || (occasionMemoTwo.indexOf("Labour") !== -1) || (occasionMemoTwo.indexOf("NDTR") !== -1) || (occasionMemoTwo.indexOf("Thanksgiving") !== -1)) && (yearIn > 1866)){
		twoOccasionStyleIdentifier = "twoOccasionHoliday";
	}
	var memoHolderFirst = document.createElement("div");
	var memoHolderSecond = document.createElement("div");
	var memoHolderThird = document.createElement("div");
	
	if((occasionMemoOne === "") && (occasionMemoTwo === "") && (occasionMemoToday === "")){
		concatenatedMemos = "";
	}
	if(occasionMemoTwo !== ""){
		memoHolderSecond.classList.add(twoOccasionStyleIdentifier);
		memoHolderSecond.insertAdjacentHTML("afterbegin", occasionMemoTwo);
		concatenatedMemos += memoHolderSecond.outerHTML;
	}
	if(occasionMemoOne !== ""){
		memoHolderFirst.classList.add(oneOccasionStyleIdentifer);
		memoHolderFirst.insertAdjacentHTML("afterbegin", occasionMemoOne);
		concatenatedMemos += memoHolderFirst.outerHTML;
	}
	if(moonPhaseCalendarName !== ""){
		memoHolderThird.classList.add("calendarMoonPhase");
		memoHolderThird.insertAdjacentHTML("afterbegin", moonPhaseCalendarName);
		concatenatedMemos += memoHolderThird.outerHTML;
	}
	return concatenatedMemos;
}

function setMoonBackgroundInCalendar(nameMoonPhaseInCalendarIn, theOccasionClassIn){
	'use strict';
	var phaseNameToColonForCalendar = nameMoonPhaseInCalendarIn.substr(0, nameMoonPhaseInCalendarIn.indexOf(":"));
	var phaseForCalendarClassName = phaseNameToColonForCalendar.replace(" ", "");
	var occasionName = "";
	var styleNameForBackground = "";
	if(theOccasionClassIn === null){
		occasionName = "";
	}else if(theOccasionClassIn === "occasion"){
		occasionName = "Occasion";
	}else if(theOccasionClassIn === "dateHoliday"){
		occasionName = "Occasion";
	}else if(theOccasionClassIn === "todaysDate"){
		occasionName = "Today";
	}else if(theOccasionClassIn === "birthdayOccasion"){
		occasionName = "Birthday";
	}else if(theOccasionClassIn === "blank"){
		occasionName = "Blank";
	}
	styleNameForBackground = "cellBackgroundFor"+ occasionName + phaseForCalendarClassName;
	return styleNameForBackground;
}

function count(theCurYearIn, startYearIn, eventTypeFlagIn){
	'use strict';
	var countNumber = theCurYearIn - startYearIn;
	var suffix = determineDateSuffix(countNumber);
	if(countNumber <= 0){
		countNumber = "";
		suffix = "";
	}
	var countHolder = document.createElement("span");
	countHolder.classList.add("anniversaryYearCount");
	countHolder.appendChild(document.createTextNode(countNumber));
	var suffixHolder = document.createElement("sup");
	suffixHolder.classList.add("anniversarySup");
	suffixHolder.appendChild(document.createTextNode(suffix +" "));
	if(eventTypeFlagIn === 1){
		countHolder.appendChild(suffixHolder);
	}
	return countHolder.outerHTML;
}

function setNewYearsHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var newYearsDayHoliday;
	var newYearsDayCheckDate = NthDay(1, 1, 1, theYearIn);						// New Years Day holiday date. It moves to Monday when 1st falls on a weekend.
	if((eventsArray[4]) && (newYearsDayCheckDate === 1) && (theMonthIn === 0) && (theYearIn > 1866)){
		newYearsDayHoliday = 2;
	}else if((eventsArray[4]) && (NthDay(1, 7, 1, theYearIn) === 1) && (theMonthIn === 0) && (theYearIn > 1866)){
		newYearsDayHoliday = 3;
	}else if((eventsArray[4]) && (theMonthIn === 0) && (theYearIn > 1866)){
		newYearsDayHoliday = 1;
	}else{
		return false;
	}
	return newYearsDayHoliday;
}

function setPaddysDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var paddysDayHoliday;	
	var paddysCheckDate = NthDay(2, 2, 3, theYearIn);							// St Paddy's Day
	if((eventsArray[27]) && (paddysCheckDate === 14) && (theMonthIn === 2) && (theYearIn > 1948)){
		paddysDayHoliday = paddysCheckDate;
	}else if((eventsArray[27]) && (theMonthIn === 2) && (theYearIn > 1948)){
		paddysDayHoliday = NthDay(3, 2, 3, theYearIn);
	}else{
		return false;
	}
	return paddysDayHoliday;
}

function setStGeorgesDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var stGeorgesDayHoliday;
	var stGeorgesDayCheckDate = NthDay(3, 2, 4, theYearIn);					// St. George's Day
	if(((eventsArray[28]) && (stGeorgesDayCheckDate > 19) && (stGeorgesDayCheckDate < 22) && (theMonthIn === 3) && (theYearIn > 1948)) || ((theYearIn === 2010) && (theMonthIn === 3))){
		stGeorgesDayHoliday = stGeorgesDayCheckDate;
	}else if((eventsArray[28]) && (theMonthIn === 3) && (theYearIn > 1948)){
		stGeorgesDayHoliday = NthDay(4, 2, 4, theYearIn);
	}else{
		return false;
	}
	return stGeorgesDayHoliday;
}

function setVictoriaDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var victoriaDayHoliday;
	var victoriaDayCheckDate = NthDay(3, 2, 5, theYearIn);						// Victoria Day
	if((eventsArray[12]) && (victoriaDayCheckDate > 17) && (victoriaDayCheckDate < 25) && (theMonthIn === 4) && (theYearIn > 1951)){
		victoriaDayHoliday = victoriaDayCheckDate;
	}else if((eventsArray[12]) && (theMonthIn === 4) && (theYearIn > 1951)){
		victoriaDayHoliday = NthDay(4, 2, 5, theYearIn);
	}else{
		return false;
	}
	return victoriaDayHoliday;
}

function setDiscoveryDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var discoveryDayHoliday;
	var discoveryDayCheckDate = NthDay(3, 2, 6, theYearIn);						// Discovery Day
	if((eventsArray[29]) && (discoveryDayCheckDate > 20) && (discoveryDayCheckDate < 22) && (theMonthIn === 5) && (theYearIn > 1961)){
		discoveryDayHoliday = discoveryDayCheckDate;
	}else if((eventsArray[29]) && (theMonthIn === 5) && (theYearIn > 1961)){
		discoveryDayHoliday = NthDay(4, 2, 6, theYearIn);
	}else{
		return false;
	}
	return discoveryDayHoliday;
}

function setCanadaDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var canadaDayHoliday;
	var canadaDayCheckDate = NthDay(1, 1, 7, theYearIn);							// Canada Day
	if(((eventsArray[14]) && (canadaDayCheckDate === 1) && (theMonthIn === 6)) && (theYearIn > 1878)){
		canadaDayHoliday = 2;
	}else if((eventsArray[14]) && (NthDay(1, 7, 7, theYearIn) === 1) && (theMonthIn === 6) && (theYearIn > 1878)){
		canadaDayHoliday = 3;
	}else if((eventsArray[14]) && (theMonthIn === 6) && (theYearIn > 1878)){
		canadaDayHoliday = 1;
	}else{
		return false;
	}
	return canadaDayHoliday;
}

function setOrangemansDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var orangemansDayHoliday;
	var orangemansCheckDate = NthDay(2, 2, 7, theYearIn);						// Orangeman's Day
	if((eventsArray[30]) && (orangemansCheckDate > 8) && (theMonthIn === 6) && (theYearIn > 1948)){
		orangemansDayHoliday = orangemansCheckDate;
	}else if((eventsArray[30]) && (theMonthIn === 6) && (theYearIn > 1948)){
		orangemansDayHoliday = 15;
	}else{
		return false;
	}
	return orangemansDayHoliday;
}

function setRegattaDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var regattaDayHoliday;
	if((theMonthIn === 7) && (theYearIn > 1870)){
		regattaDayHoliday = NthDay(1, 4, 8, theYearIn);						// Regatta Day
	}else{
		return false;
	}
	return regattaDayHoliday;
}

function setLabourDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var labourDayHoliday;
	if((theMonthIn === 8) && (theYearIn > 1881)){
		labourDayHoliday = NthDay(1, 2, 9, theYearIn);							// Labour Day
	}else{
		return false;
	}
	return labourDayHoliday;
}

function setNationalDayForTruthAndReconciliationHolidayDate(theMonthIn, theYearIn){ // NDTR holiday
	'use strict';
	var nationalDayHoliday;
	if((NthDay(-1, 1, 9, theYearIn) === 30) && (theMonthIn === 9) && (theYearIn > 2020)){ // if Sept 30 is Sunday, set holiday to October 1st.
		nationalDayHoliday = 1;
	}else if((NthDay(-1, 7, 9, theYearIn) === 30) && (theMonthIn === 9) && (theYearIn > 2020)){ // if Sept 30 is Saturday, set holiday to Oct 2.
		nationalDayHoliday = 2;
	}else if((NthDay(-1, 1, 9, theYearIn) !== 30) && (NthDay(-1, 7, 9, theYearIn) !== 30) && (theMonthIn === 8) && (theYearIn > 2020)){ // Only allow days that are not a Saturday, or not a Sunday, on Sept 30 to be set as holiday.
		nationalDayHoliday = 30;
	}else{
		return false;
	}
	return nationalDayHoliday;
}

function setThanksgivingDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var thanksgivingDayHoliday;
	if((theMonthIn === 9) && (theYearIn > 1956)){
		thanksgivingDayHoliday = NthDay(2, 2, 10, theYearIn);						// Thanksgiving Day
	}else{
		return false;
	}
	return thanksgivingDayHoliday;
}

function setRemembranceDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var remembranceDayHoliday;
	var remembranceDayCheckDate = NthDay(2, 1, 11, theYearIn);					// Remembrance Day
	if((eventsArray[20]) && (remembranceDayCheckDate === 11) && (theMonthIn === 10) && (theYearIn > 1918)){
		remembranceDayHoliday = 12;
	}else if((eventsArray[20]) && (NthDay(2, 7, 11, theYearIn) === 11) && (theMonthIn === 10) && (theYearIn > 1918)){
		remembranceDayHoliday = 13;
	}else if((theMonthIn === 10) && (theYearIn > 1918)){
		remembranceDayHoliday = 11;
	}else{
		return false;
	}
	return remembranceDayHoliday;
}

function setXmasDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var xmasDayHoliday;
	var xmasDayCheckDate = NthDay(4, 1, 12, theYearIn);							// Xmas Day
	if((eventsArray[25]) && (xmasDayCheckDate === 25) && (theMonthIn === 11) && (theYearIn > 1866)){
		xmasDayHoliday = 27;
	}else if((eventsArray[25]) && (NthDay(4, 7, 12, theYearIn) === 25) && (theMonthIn === 11) && (theYearIn > 1866)){
		xmasDayHoliday = 27;
	}else if((theMonthIn === 11) && (theYearIn > 1866)){
		xmasDayHoliday = 25;
	}else{
		return false;
	}
	return xmasDayHoliday;
}

function setBoxingDayHolidayDate(theMonthIn, theYearIn){
	'use strict';
	var boxingDayHoliday;
	var boxingDayCheckDate = NthDay(4, 1, 12, theYearIn);							// Boxing Day
	if((eventsArray[26]) && (boxingDayCheckDate === 26) && (theMonthIn === 11) && (theYearIn > 1866)){
		boxingDayHoliday = 28;
	}else if((eventsArray[26]) && (NthDay(4, 7, 12, theYearIn) === 26) && (theMonthIn === 11) && (theYearIn > 1866)){
		boxingDayHoliday = 28;
	}else if((theMonthIn === 11) && (theYearIn > 1866)){
		boxingDayHoliday = 26;
	}else{
		return false;
	}
	return boxingDayHoliday;
}

function evaluateDSTbegin(){
	'use strict';
	var beginDSTdateOfMonth;
	var beginDSTmonth;
	var calendarYear = document.getElementById("yearTextBox").value;
	if(calendarYear >= 2007){
		beginDSTdateOfMonth = NthDay(2, 1, 3, calendarYear);
		beginDSTmonth = 2;
	}else if((calendarYear >= 1987) && (calendarYear < 2007)){
		beginDSTdateOfMonth = NthDay(1, 1, 4, calendarYear);
		beginDSTmonth = 3;
	}else if((calendarYear >= 1952) && (calendarYear < 1987)){
		beginDSTdateOfMonth = NthDay(-1, 1, 4, calendarYear);
		beginDSTmonth = 3;
	}else if((calendarYear >= 1917) && (calendarYear < 1952)){
		beginDSTdateOfMonth = NthDay(2, 1, 6, calendarYear);
		beginDSTmonth = 5;
	}else{
		return false;
	}
	var  beginDSTdate = new Date(calendarYear, beginDSTmonth, beginDSTdateOfMonth);
	return beginDSTdate;
}

function evaluateDSTend(){
	'use strict';
	var endDSTdateOfMonth;
	var endDSTmonth;
	var calendarYear = document.getElementById("yearTextBox").value;
	if(calendarYear >= 2007){
		endDSTdateOfMonth = NthDay(1, 1, 11, calendarYear);
		endDSTmonth = 10;
	}else if((calendarYear >= 1970) && (calendarYear < 2007)){
		endDSTdateOfMonth = NthDay(-1, 1, 10, calendarYear);
		endDSTmonth = 9;
	}else if((calendarYear >= 1952) && (calendarYear < 1970)){
		endDSTdateOfMonth = NthDay(-1, 1, 9, calendarYear);
		endDSTmonth = 8;
	}else if((calendarYear >= 1917) && (calendarYear < 1952)){
		endDSTdateOfMonth = NthDay(-1, 1, 9, calendarYear);
		endDSTmonth = 8;
	}else{
		return false;
	}
	var endDSTdate = new Date(calendarYear, endDSTmonth, endDSTdateOfMonth);
	return endDSTdate;
}

function calculateNewfoundlandDaylightSavingBeginTimes(userEnteredYearIn){
	'use strict';
	var DSTstartNewfoundland = "";
	if(userEnteredYearIn < 1917){
	return false;
	}else if((userEnteredYearIn >= 1917) && (userEnteredYearIn < 1952)){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 6 - 1, NthDay(2 ,1, 6, userEnteredYearIn), 0, 30, 0);
	}else if((userEnteredYearIn >= 1952) && (userEnteredYearIn < 1970)){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 4 - 1, NthDay(-1, 1, 4, userEnteredYearIn), 3, 31, 0);
	}else if((userEnteredYearIn >= 1970) && (userEnteredYearIn < 1987)){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 4 - 1, NthDay(-1, 1, 4, userEnteredYearIn), 3, 31, 0);
	}else if((userEnteredYearIn >= 1987) && (userEnteredYearIn < 2007)){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 4 - 1, NthDay(1, 1, 4, userEnteredYearIn), 3, 31, 0);
	}else if((userEnteredYearIn >= 2007) && (userEnteredYearIn < 2012)){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 3 - 1, NthDay(2, 1, 3, userEnteredYearIn), 3, 31, 0); // Set DST begin time: (year,monthnumber-1,NthDay(firstsecondthirdfourthday of month or negative number to count backwards firstsecondthirdfourthday from end of month,dayofweek 1 for Sunday,monthnumber),hour,minute,second)
	}else if(userEnteredYearIn >= 2012){
		DSTstartNewfoundland = new Date(userEnteredYearIn, 3 - 1, NthDay(2, 1, 3, userEnteredYearIn), 5, 30, 0);
	}
	return DSTstartNewfoundland;
}

function calculateNewfoundlandDaylightSavingEndTimes(userEnteredYearIn){
	'use strict';
	var DSTendNewfoundland = "";
	if(userEnteredYearIn < 1917){
	return false;
	}else if((userEnteredYearIn >= 1917) && (userEnteredYearIn < 1952)){
		DSTendNewfoundland = new Date(userEnteredYearIn, 9 - 1, NthDay(-1, 1, 9, userEnteredYearIn), 23, 30, 0);
	}else if((userEnteredYearIn >= 1952) && (userEnteredYearIn < 1970)){
		DSTendNewfoundland = new Date(userEnteredYearIn, 9 - 1, NthDay(-1, 1, 9, userEnteredYearIn), 2, 30, 0);
	}else if((userEnteredYearIn >= 1970) && (userEnteredYearIn < 1987)){
		DSTendNewfoundland = new Date(userEnteredYearIn, 10 - 1, NthDay(-1, 1, 10, userEnteredYearIn), 2, 31, 0);
	}else if((userEnteredYearIn >= 1987) && (userEnteredYearIn < 2007)){
		DSTendNewfoundland = new Date(userEnteredYearIn, 10 - 1, NthDay(-1, 1, 10, userEnteredYearIn), 2, 31, 0);
	}else if((userEnteredYearIn >= 2007) && (userEnteredYearIn < 2011)){
		DSTendNewfoundland = new Date(userEnteredYearIn, 11 - 1, NthDay(1, 1, 11, userEnteredYearIn), 2, 31, 0); // Set DST end time: (year,monthnumber-1,NthDay(firstsecondthirdfourthday of month or negative number to count backwards firstsecondthirdfourthday from end of month,dayofweek 1 for Sunday,monthnumber),hour,minute,second)
	}else if(userEnteredYearIn >= 2011){
		DSTendNewfoundland = new Date(userEnteredYearIn, 11 - 1, NthDay(1, 1, 11, userEnteredYearIn), 4, 30, 0);
	}
	return DSTendNewfoundland;
}

function getNewfoundlandTimeZoneName(dateObjectPassedIn, theFlagIn){
	'use strict';
	var theTimeZoneName = "";
	var theYearForDST = dateObjectPassedIn.getFullYear();
	var theMonthForDST = dateObjectPassedIn.getMonth();
	var theDateForDST = dateObjectPassedIn.getDate();
	var beginDSTinNLdateObject = calculateNewfoundlandDaylightSavingBeginTimes(theYearForDST);
	var endDSTinNLdateObject = calculateNewfoundlandDaylightSavingEndTimes(theYearForDST);
	if(theFlagIn === "short"){
		if((beginDSTinNLdateObject < dateObjectPassedIn) && (dateObjectPassedIn < endDSTinNLdateObject)){
			theTimeZoneName = "(NDT)";
		}else{
			theTimeZoneName = "(NST)";
		}
	}else if(theFlagIn === "long"){
		if((beginDSTinNLdateObject < dateObjectPassedIn) && (dateObjectPassedIn < endDSTinNLdateObject)){
			theTimeZoneName = "Newfoundland Daylight Time (NDT)";
		}else{
			theTimeZoneName = "Newfoundland Standard Time (NST)";
		}
	}
	return theTimeZoneName;
}

function evaluateTimeZoneName(seasonIn){
	'use strict';
	var calendarBuildingYear = document.getElementById("yearTextBox").value;
	var isTimeDST;
	if((seasonIn === 1) && (calendarBuildingYear >= 2007)){ // Spring
		isTimeDST = "Daylight Time (NDT)";
	}else if(((seasonIn === 2) && (calendarBuildingYear >= 1917)) || ((seasonIn === 3) && (calendarBuildingYear >= 1917))){	// Summer = 2,  Fall = 3
		isTimeDST = "Daylight Time (NDT)";		
	}else{
		isTimeDST = "Standard Time (NST)";
	}
	return isTimeDST;
}

function toFormattedTwelveHourClockTime(aDateObjectIn){
	'use strict';
	var theDateObject = aDateObjectIn;
	var theTwentyFourHour = theDateObject.getHours();
	var theUnformattedMinute = theDateObject.getMinutes();
	var theTimeTwelveTag = "";
	var theTwelveHour = "";
	var theFormattedMinute = "";
	if(theTwentyFourHour > 11){
		theTimeTwelveTag = "PM";
	}else{
		theTimeTwelveTag = "AM";
	}
	if(theTwentyFourHour < 1){
		theTwelveHour = theTwentyFourHour + 12;
	}else if(theTwentyFourHour > 12){
		theTwelveHour = theTwentyFourHour - 12;
	}else{
		theTwelveHour = theTwentyFourHour;
	}
	if(theUnformattedMinute < 10){
		theFormattedMinute = "0" + theUnformattedMinute;
	}else{
		theFormattedMinute = theUnformattedMinute;
	}
	return theTwelveHour +":"+ theFormattedMinute +" "+ theTimeTwelveTag;
}

function seasonsChangeTimeOfDay(seasonNumberIn, givenYearIn){
	'use strict';
	var theSeasonDateObject = calc(seasonNumberIn, givenYearIn);
	return toFormattedTwelveHourClockTime(theSeasonDateObject);
}

function createShroveTuesdayDate(theYearPassedIn){
	'use strict';
	var checkYear = parseInt(theYearPassedIn);
	var easterSundayDate = 0;
	if(parseInt(checkYear) > 1752){
		easterSundayDate = ShowEasters(checkYear, "Gregorian");
	}
	var theShroveTuesdayDateObject =  subtractDays(easterSundayDate, 47);
	return theShroveTuesdayDateObject;
}

function evaluateGoodFriday(theYearIn){
	'use strict';
	var theEasterSundayDateObject = 0;
	if(parseInt(theYearIn) > 1752){
		theEasterSundayDateObject = ShowEasters(theYearIn, "Gregorian");
	}
	var theGoodFridayDateObject = subtractDays(theEasterSundayDateObject, 2);
	return theGoodFridayDateObject;
}

function subtractDays(dateObjectPassedIn, numberDaysToSubtractIn){
	dateObjectPassedIn.setDate(dateObjectPassedIn.getDate() - numberDaysToSubtractIn);
	return dateObjectPassedIn;
}

function reInitializeMainArrayItems(calendarDateObjectIn){
	'use strict';
	var theGivenYearIn = calendarDateObjectIn.getFullYear();
	// Not required to be in numerical order. All repeating annual occurrences in the eventsArray that need to use nth day, or other methods to evaluate when they occur, must be updated here in order to have them repeat on dates or months other than the listed dates or months in the eventsArray.
	eventsArray[0].theDate = calc(1, theGivenYearIn).getDate(); 	// Spring Equinox
	eventsArray[0].theMemo = "Spring%"+ seasonsChangeTimeOfDay(1, theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(calendarDateObjectIn, "short");
	eventsArray[1].theDate = calc(2, theGivenYearIn).getDate();		// Summer Solstice
	eventsArray[1].theMemo = "Summer%"+ seasonsChangeTimeOfDay(2, theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(calendarDateObjectIn, "short");
	eventsArray[2].theDate = calc(3, theGivenYearIn).getDate();		// Fall Equinox
	eventsArray[2].theMemo = "Fall "+ seasonsChangeTimeOfDay(3, theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(calendarDateObjectIn, "short");
	eventsArray[3].theDate = calc(4, theGivenYearIn).getDate();		// Winter Solstice
	eventsArray[3].theMemo = "Winter%"+ seasonsChangeTimeOfDay(4, theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(calendarDateObjectIn, "short");
	eventsArray[4].theMemo = "New Year\'s Day";
	eventsArray[5].theMonth = parseInt(createShroveTuesdayDate(theGivenYearIn).getMonth() + 1);		//  Pancake Day
	eventsArray[5].theDate = createShroveTuesdayDate(theGivenYearIn).getDate();
	if(theGivenYearIn > 1916){
		eventsArray[8].theMonth = evaluateDSTbegin().getMonth() + 1;
		eventsArray[8].theDate = evaluateDSTbegin().getDate(); 										// DST begins
		eventsArray[8].theMemo = "Daylight Saving%Time (DST) Begins";
	}		
	var theGoodFridayDateObject = evaluateGoodFriday(theGivenYearIn);
	eventsArray[9].theMonth = parseInt(theGoodFridayDateObject.getMonth() + 1); // Good Friday
	eventsArray[9].theDate = theGoodFridayDateObject.getDate();
	if(theGivenYearIn > 1752){ // Easter Sunday
		var theGregorianEasterSundayDateObject = ShowEasters(theGivenYearIn, "Gregorian");
		eventsArray[10].theMonth = parseInt(theGregorianEasterSundayDateObject.getMonth() + 1);
		eventsArray[10].theDate = theGregorianEasterSundayDateObject.getDate();
	}
	eventsArray[11].theDate = NthDay(2, 1, 5, theGivenYearIn); // Mother's Day
	eventsArray[13].theDate = NthDay(3, 1, 6, theGivenYearIn); // Father's Day
	if(theGivenYearIn === 1916){
		eventsArray[32].theMemo = "The Battle of%Beaumont Hamel"; // Beaumont Hamel
	}else{
		eventsArray[32].theMemo = "Beaumont Hamel";
	}	
	if(theGivenYearIn === 1867){ // Canada Day - Dominion Day
		eventsArray[14].theMemo = "BNA Act effected";
	}else if(theGivenYearIn < 1982){
		eventsArray[14].theMemo = "Dominion Day "+ count(theGivenYearIn, parseInt(eventsArray[14].theYear), 2);
	}else if(theGivenYearIn >= 1982){
		eventsArray[14].theMemo = "Canada Day "+ count(theGivenYearIn, parseInt(eventsArray[14].theYear), 2);
	}
	var countForRegattaDayMinusOne = count(theGivenYearIn, parseInt(eventsArray[15].theYear - 1), 1); // Regatta Day
	var countForRegattaDayAccurate = count(theGivenYearIn, eventsArray[15].theYear, 1);
	if(theGivenYearIn === 1818){
		eventsArray[15].theDate = 22;
		eventsArray[15].theMonth = 9;
	}else{
		eventsArray[15].theDate = NthDay(1, 4, 8, theGivenYearIn);
		eventsArray[15].theMonth = 8;
	}
	if(theGivenYearIn === 1940){
		eventsArray[15].theMemo = "NO Regatta";
	}else if((theGivenYearIn > 1817) && (theGivenYearIn < 1940)){
		eventsArray[15].theMemo = "The "+ countForRegattaDayMinusOne +"Regatta";
	}else if(theGivenYearIn > 1940){
		eventsArray[15].theMemo = "The "+ countForRegattaDayAccurate +"Regatta";
	}
	eventsArray[16].theDate = NthDay(1, 2, 9, theGivenYearIn); // Labour Day
	eventsArray[17].theDate = NthDay(2, 2, 10, theGivenYearIn); // Thanksgiving Day
	if(theGivenYearIn > 1916){
		eventsArray[19].theMonth = evaluateDSTend().getMonth() + 1;
		eventsArray[19].theDate = evaluateDSTend().getDate();				// DST ends
		eventsArray[19].theMemo = "Daylight Saving%Time (DST) Ends";
	}
	if(theGivenYearIn < 1931){ // Remembrance Day
		var theThe = theGivenYearIn >= 1931 ? "The " : ""; // My condensed if using conditional operator ? to evaluate whether to place the word "the" in variable theThe.
		var anniversary = theGivenYearIn > 1918 && theGivenYearIn < 1931 ? "Anniversary of" : "";
		eventsArray[20].theMemo = theThe + count(theGivenYearIn, parseInt(eventsArray[20].theYear), 1) + anniversary +"%Armistice Day";
	}else if(theGivenYearIn >= 1931){
		eventsArray[20].theMemo = "The "+ count(theGivenYearIn, parseInt(eventsArray[20].theYear), 1) +"Day%of Remembrance";
	}
	if(theGivenYearIn > 1866){
		eventsArray[25].theMemo = "Xmas Day";
		eventsArray[26].theMemo = "Boxing Day";
	}
	eventsArray[48].theMemo = "NDTR";
}



