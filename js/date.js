var moment = require("moment");

var dateType = "";

function getDate (dateType) {
	var month = moment().get('month') + 1;
	var day = moment().get('date');
	var out;
	if (month < 10) {
		month = '0' + month;
	};
	if (day < 10) {
		day = '0' + day;
	};
	switch (dateType) {
		case "json" :
			out = moment().get('year') + "/" + month + "/" + day;
			return out;
			break;
		case "image" :
			out = moment().get('year') + month + day;
			return out;
			break;
		default :
			console.log("Error:Date Argument Not Found!");
			break;
	}
}

//For JSON file
function getJsonDate () {
	dateType = "json";
	out = getDate(dateType);
	return out;
	dataType = "";
}

//For Image
function getImgDate () {
	dateType = "image";
	out = getDate(dateType);
	return out;
	dataType = "";
}

function getmonth () {
	var month = new Array(12);
	month[0]="JAN";
	month[1]="FEB";
	month[2]="MAR";
	month[3]="APR";
	month[4]="MAY";
	month[5]="JUN";
	month[6]="JUL";
	month[7]="AUG";
	month[8]="SEP";
	month[9]="OCR";
	month[10]="NOV";
	month[11]="DEC";
	return month[moment().get('month')];
}

function getweekday (){
	var weekday = new Array(7);
	weekday[0] = "SUNDAY";
	weekday[1] = "MONDAY";
	weekday[2] = "TUESDAY";
	weekday[3] = "WEDNESDAY";
	weekday[4] = "THURSDAY";
	weekday[5] = "FRIDAY";
	weekday[6] = "SATURDAY";
	return weekday[moment().get('day')];
}

function getday (){
	var day = moment().get('date');
	if (day < 10) {
		day = "0" + day;
	};
	return "" + day;
}