// Curtis' Website most awesome nth day script known to man.

var numberDaysInMonth = new Array( 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

function LeapYear(parCheckYear) {
	var checkYear = parseInt(parCheckYear);
	if(checkYear < 1752){
		return false;
	}
	if((checkYear / 4) != Math.floor(checkYear / 4)){
		return false;
	}
	if((checkYear / 100) != Math.floor(checkYear / 100)){
		return true;
	}
	if((checkYear / 400) != Math.floor(checkYear / 400)){
		return false;
	}
	return true;
}


function highestDayInMonth(parTheYear, parTheMonth){
	var yearToCheck = parTheYear;
	var monthToCheck = parTheMonth;
	if(LeapYear(yearToCheck)){
		if(monthToCheck == 2){
			var	daysInMonth = numberDaysInMonth[monthToCheck - 1] + 1;
		}else{
			var daysInMonth = numberDaysInMonth[monthToCheck - 1];
		}
	}else{
		var daysInMonth = numberDaysInMonth[monthToCheck - 1];
	}
	return daysInMonth;
}


function NthDay(nthPar, parWeekday, parMonth, parYear){
	var highestDate = highestDayInMonth(parYear, parMonth);
	if(nthPar > 0){
		return (nthPar - 1) * 7 + 1 + (7 + parWeekday - DayOfWeek((nthPar - 1) * 7 + 1, parMonth, parYear)) % 7;
	}else if(((nthPar < 0) && (highestDate == 31) && (parWeekday == DayOfWeek(31, parMonth, parYear))) || ((nthPar < 0) && (highestDate == 30) && (parWeekday == DayOfWeek(30, parMonth, parYear))) || ((nthPar < 0 && highestDate == 28) && (parWeekday == DayOfWeek(28, parMonth, parYear))) || ((nthPar < 0 && highestDate == 29) && (parWeekday == DayOfWeek(29, parMonth, parYear)))){
		return highestDate - ((-1 * nthPar - 1) * 7 + 1) - (DayOfWeek(highestDate - ((-1 * nthPar - 1) * 7 + 1), parMonth, parYear) - parWeekday - 7) % 7;
	}else{
		return highestDate - ((-1 * nthPar - 1) * 7 + 1) - (DayOfWeek(highestDate - ((-1 * nthPar - 1) * 7 + 1), parMonth, parYear) - parWeekday + 7) % 7;
	}
}

function DayOfWeek(dayPar, monthPar, yearPar) {
	var a = Math.floor((14 - monthPar) / 12);
	var y = yearPar - a;
	var m = monthPar + 12 * a - 2;
	var d = (dayPar + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
	return parseInt(d + 1);
}

