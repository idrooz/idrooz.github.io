"use strict"

function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}

runClock();
setInterval(runClock, 1000);
function runClock() {
  var thisDay = new Date();
  var thisDate = thisDay.toLocaleDateString();
  var thisDayNum = thisDay.getDay();
  var thisWeekday = getWeekday(thisDayNum);
  var thisTime = thisDay.toLocaleTimeString();
  var thisTime = thisDay.toLocaleTimeString();
  document.getElementById("date").textContent = thisDate;
  document.getElementById("wday").textContent = thisWeekday;
  document.getElementById("time").textContent = thisTime;
}

var secsLeft = 10;
function countdown () {
  var secsString = addLeadingZero(secsLeft);
  document.getElementById("seconds").textContent = secsString;
  checkCountdown();
  secsLeft--;
  var secsLeft = 10;
  var clockID;
  clockID = setInterval(countdown, 1000); 
}

function stopCountdown() {
  clearInterval(clockID);
  document.getElementById("alert").textContent = "Time's Up";
}
   
function checkCountdown() {
   if (secsLeft === 0) stopCountdown();
}

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}