// Curtis' Easter Sunday Date Calculator:

   var jDay = 0;
   var jMonth = 0;
   var oDay = 0;
   var oMonth = 0;
   var wDay = 0;
   var wMonth = 0;
   var year = 0;

function ShowEasters(yr, calendarType){
	year = parseInt(yr, 10);
	if(isNaN(year)){
		year = 0;
	}
	// reset vars
	jDay = 0;
	jMonth = 0;
	oDay = 0;
	oMonth = 0;
	wDay = 0;
	wMonth = 0;
	//get relevant Easter dates
	EasterJulian();	// used for all calculations
	
	if((year > 325) && (year <= 1582)){
		return jDay +","+ jMonth;
	}else{	// year is 1583 to 4099
		EasterOrthodox(year, jDay, jMonth);
		EasterWestern();
	/*	if(year <= 1923){
			// clarify that this is a Gregorian date
			// last known use of the Julian calendar was in 1923
			return wDay +","+ wMonth;
		}else{
			return wDay +","+ wMonth;
		}	*/
	}
	var dateObjectForEasterSunday = 0;
	if(calendarType === "Gregorian"){
		dateObjectForEasterSunday = new Date(yr, parseInt(wMonth - 1), wDay, 12, 0, 0, 0);
	}else if(calendarType === "Julian"){
		dateObjectForEasterSunday = new Date(yr, parseInt(jMonth - 1), jDay, 12, 0, 0, 0);
	}
	return dateObjectForEasterSunday;
}

function IntDiv(num, dvsr){ // performs integer division of num/dvsr - eg IntDiv(9,4)=2
   var negate = false;
   var result = 0;
   if(dvsr == 0){
      return null;
   }else{
		if(num * dvsr < 0){
			negate = true;
		}
		if(num < 0){
			num = -num;
		}
		if(dvsr < 0){
			dvsr = -dvsr;
		}
		result = ((num - (num % dvsr)) / dvsr);
		if(negate){
			return -result;
		}else{
			return result;
		}
	}
}

function EasterJulian(){
   var g = 0;
   var i = 0;
   var j = 0;
   var p = 0;
   g = year % 19;
   i = (19 * g + 15) % 30;
   j = (year + IntDiv(year, 4) + i) % 7;
   p = i - j + 28;
   jDay = p;
   jMonth = 4;
   if(p > 31){
      jDay = p - 31;
   }else{
      jMonth = 3;
   }
}

function EasterWestern(){
   var g = 0;
   var c = 0;
   var h = 0;
   var i = 0;
   var j = 0;
   var p = 0;
   g = year % 19;
   c = IntDiv(year, 100);
   h = (c - IntDiv(c, 4) - IntDiv(8 * c + 13, 25) + 19 * g + 15) % 30;
   i = h - IntDiv(h, 28) * (1 - IntDiv(h, 28)
      * IntDiv(29, h + 1) * IntDiv(21 - g, 11));
   j = (year + IntDiv(year, 4) + i + 2 - c + IntDiv(c, 4)) % 7;
   p = i - j + 28;
   wDay = p;
   wMonth = 4;
   if(p > 31){
      wDay = p - 31;
   }else{
      wMonth = 3;
   }
}

/* Even though the Julian calendar is no longer in use
   Orthodox Easters are still based on this calendar
   NOTE! JULIAN Easter Date must be calculated first!
   This function converts Julian March and April
   Easter Sunday dates to Gregorian calendar dates  */
function EasterOrthodox (yr, jDay, jMonth){
   var extra = 0;
   var tmp = 0;
   oDay = 0;
   oMonth = 0;
   if ((yr > 1582) && (yr <= 4099)) {
      extra = 10;
   if (yr > 1600) {
         tmp = IntDiv(yr, 100) - 16;
         extra = extra + tmp - IntDiv(tmp, 4);
      }
      oDay = jDay + extra;
      oMonth = jMonth;
      if ((oMonth == 3) && (oDay > 31)) {
         oMonth = 4;
         oDay = oDay - 31;
      }
      if ((oMonth == 4) && (oDay > 30)) {
         oMonth = 5;
         oDay = oDay - 30;
      }
   }
}

// alert("From script:\n\njDay: "+ jDay +"\njMonth: "+ jMonth +"\nyear: "+ year);
