var time = document.getElementById("count");
var today = new Date();
today.setHours(today.getHours()-4);
var christmasday = new Date(today.getFullYear(),11,25);
christmasday.setHours(today.getHours()-22);
var timeuntilchristmas = new Date(christmasday.getTime()-today.getTime());
timeuntilchristmas.setMonth(timeuntilchristmas.getMonth())

var result = timeuntilchristmas.getMonth()+" Months and "+(timeuntilchristmas.getDate()-1)+" Days!!!";

time.innerHTML = result;