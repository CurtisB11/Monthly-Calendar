// Another Curtis' Website document. This one provides Moon phase information to the calendar.

var today = new Date();
var DSTstartNewfoundland = new Date(today.getFullYear(), 3 - 1, NthDay(2, 1, 3, today.getFullYear()), 2, 0, 0);
var DSTendNewfoundland = new Date(today.getFullYear(), 11 - 1, NthDay(1, 1, 11, today.getFullYear()), 2, 0, 0);
var NLoffset = 0;

if((today > DSTstartNewfoundland) && (today < DSTendNewfoundland)){
    NLoffset = -2.5;
//	NLoffset = -1; // Experimenting with the time of day accuracy, August 11, 2022.
}else{
    NLoffset = -3.5;
//	NLoffset = 0; // Experimenting with the time of day accuracy
}

var j1;
var ja;
var jb;
var jd;
var frac;
var month;
var day;
var year;

function julday(mm, id, iyyy){
	'use strict';
	if(iyyy === 0){
		return 0;
	}else{
		if(iyyy < 0){
			iyyy += 1;
		}
		if(mm > 2){
			var jy = iyyy;
			var jm = 1.0 * mm + 1;
		}else{
  			jy = iyyy - 1;
  			jm = 1.0 * mm + 13;
		}
		j1 = 1.0 * Math.floor(365.25 *jy);
		var j2 = 1.0 * j1 + Math.floor(30.6001 * jm);
		var j3 = 1.0 * j2 + 1.0 * id;
		var j4 = 1.0 * j3 + 1720995;
		if(id + 31 * (mm + 12 * iyyy) >= (15 + 31 * (10 + 12 * 1582))){
			ja = 1.0 * Math.floor(0.01 * jy);
			jb = 1.0 * Math.floor(0.25 * ja);
			var j5 = 1.0 * j4 + 2;
			var j6 = 1.0 * j5 - ja;
			var jul = 1.0 * j6 + jb;
		}else{
			jul = j4;
		}
		return jul;
	}
}

function caldat(julian){
	'use strict';
	julian = 0 + julian;
	if(julian >= 2299161){
		var jalpha = Math.floor((1.0 * (julian - 1867216)-0.25)/36524.25);
		ja = 1 * julian + 1 + jalpha - Math.floor(0.25 * jalpha);
	}else{
		ja = julian;
	}
	jb = ja + 1524;
	var jc = Math.floor(6680.0 + ((jb - 2439870)-122.1)/365.25);
	jd = 365 * jc + Math.floor(0.25 * jc);
	var je = Math.floor((jb - jd)/ 30.6001);
	day = jb - jd - Math.floor(30.6001 * je);
	month = je - 1;
	if(month > 12){
		month -= 12;
	}
	year = jc - 4715;
	if(month > 2){
		--year;
	}
	if(year <= 0){
		--year;
	}
}

function flmoon(n, nph){
	'use strict';
	var RAD = 3.14159265/180.0;
	var c = n + nph / 4.0;
	var t = c / 1236.85;
	var t2 = t * t;
	var as = 359.2242 + 29.105356 * c;
	var am = 306.0253 + 385.816918 * c + 0.010730 * t2;
	jd = 2415020 + 28 * n + 7 * nph;
	var xtra = 0.75933 + 1.53058868 * c + ((1.178e-4) - (1.55e-7) * t) * t2;
	if(nph === 0 || nph === 2){
		xtra += (0.1734 - 3.93e-4 * t) * Math.sin(RAD * as) - 0.4068 * Math.sin(RAD * am);
	}else if(nph === 1 || nph === 3){
		xtra += (0.1721 - 4.0e-4 * t) * Math.sin(RAD * as) - 0.6280 * Math.sin(RAD * am);
	}
	var i = (xtra > 0.0 ? Math.floor(xtra) :  Math.ceil(xtra - 1.0));
	jd += i;
	frac = xtra - i;
}

function generatePhaseDates(parMonth, parYear){
	'use strict';
	var arrayMoonPhasesAndDates = [];
	var oneMoonPhaseNameWithDate = [];
	var thisyear = parYear; // Pass in calendar year here.
	var thismonth = (parseInt(parMonth)+1); //.toString(); // Pass in calendar month, convert to a number so 1 can be added and then convert back to string to simulate data as received from the now nonexistant form.
	var thisday = "1"; // Use first of the month as reference date to calculate moon data for month.
	var TZ = NLoffset; // This is the time zone offset measured in hours. Currently set to NL time offset. The times aren't overly accurate when compared to data on a few almanac sites on the web.
	var timzon = TZ / 24.0;
	var n = Math.floor(12.37 * (thisyear -1900 + ((1.0 * thismonth - 0.5)/12.0)));
	var nph = 2;
	j1 = julday(thismonth,thisday,thisyear);
	flmoon(n,nph); 
	n += Math.floor(1.0 * (j1 - jd) / 28.0);
	for(var iii = 1; iii <= 12; iii++){
		flmoon(n, nph);
		frac = 24.0 * (frac + timzon);
		if(frac < 0){
			--jd;
			frac += 24.0;
		}
		if(frac > 12.0){
			++jd;
			frac -= 12.0;
		}else{
			frac += 12.0;
		}
		var i1 = Math.floor(frac);
		var secs = 3600.0 * (frac - i1);
		var i2 = Math.floor(secs / 60.0);
		var i3 = Math.floor(secs - 60 * i2 + 0.5);
		caldat(jd);
		var theMoonDateObject = new Date(year, parseInt(month - 1), day, i1, i2, i3);
		var beginningOfGregorianCalendar = new Date(1752, 8, 14); // Use this date to prevent moon phases from displaying on incorrect dates during parts of 1752 that are on Julian Calendar.
		if((nph === 2) && (parseInt(thismonth) === month) && (theMoonDateObject > beginningOfGregorianCalendar)){  // nph 2 is Full Moon
			oneMoonPhaseNameWithDate = {
				phaseName: "Full Moon: <span class=\"moonPhaseTime\">"+ toFormattedTwelveHourClockTime(theMoonDateObject) +"</span> <span class=\"moonPhaseTimeZone\">"+ getNewfoundlandTimeZoneName(theMoonDateObject, "long") +".</span>",
				phaseDate: theMoonDateObject
			};
			arrayMoonPhasesAndDates.push(oneMoonPhaseNameWithDate);
		}else if((nph === 3) && (parseInt(thismonth) === month) && (theMoonDateObject > beginningOfGregorianCalendar)){ // nph 3 is Last Quarter
			oneMoonPhaseNameWithDate = {
				phaseName: "Last Quarter: <span class=\"moonPhaseTime\">"+ toFormattedTwelveHourClockTime(theMoonDateObject) +"</span> <span class=\"moonPhaseTimeZone\">"+ getNewfoundlandTimeZoneName(theMoonDateObject, "long") +".</span>",
				phaseDate: theMoonDateObject
			};
			arrayMoonPhasesAndDates.push(oneMoonPhaseNameWithDate);
		}else if((nph === 0) && (parseInt(thismonth) === month) && (theMoonDateObject > beginningOfGregorianCalendar)){ // nph 0 is New Moon
			oneMoonPhaseNameWithDate = {
				phaseName: "New Moon: <span class=\"moonPhaseTime\">"+ toFormattedTwelveHourClockTime(theMoonDateObject) +"</span> <span class=\"moonPhaseTimeZone\">"+ getNewfoundlandTimeZoneName(theMoonDateObject, "long") +".</span>",
				phaseDate: theMoonDateObject
			};
			arrayMoonPhasesAndDates.push(oneMoonPhaseNameWithDate);
		}else if((nph === 1) && (parseInt(thismonth) === month) && (theMoonDateObject > beginningOfGregorianCalendar)){ // nph 1 is First Quarter
			oneMoonPhaseNameWithDate = {
			phaseName: "First Quarter: <span class=\"moonPhaseTime\">"+ toFormattedTwelveHourClockTime(theMoonDateObject) +"</span> <span class=\"moonPhaseTimeZone\">"+ getNewfoundlandTimeZoneName(theMoonDateObject, "long") +".</span>",
				phaseDate: theMoonDateObject
			};
			arrayMoonPhasesAndDates.push(oneMoonPhaseNameWithDate);		
		}
		if(nph === 3){
			nph = 0;
			++n;
		}else{
			++nph;
		}
	} // End for loop.
	return arrayMoonPhasesAndDates;
}
