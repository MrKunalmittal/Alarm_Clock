/*------------------------------------------------
    object oriented js
    Kunal mittal

    Assignment 01
    
-------------------------------------------------- */

'use strict';
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

let current = select('.clock');
let showAlarm = select('.showalarm');
let btn = select('.button');
let alarm = select('.alarm');
let setAlarm = select('.setalarm');
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]/;

const alarmSound = new Audio('./assests/media/alarm.mp3');
alarmSound.type = 'audio/mp3;'

function currentTime() {

  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');


  //const timeString = (`${hours} : ${minutes} : ${seconds}`);
  let timeString = hours + ':' + minutes + ':' + seconds;
  let alarmTime = hours + ':' + minutes;

  current.innerText = timeString;

  let alarmValue = setAlarm.value.trim();




  alarm.addEventListener('click', function () {

    if (alarmValue.length === 0) {
      showAlarm.innerText = 'Enter correct time\n';
      valid = false;

    } else if (timeRegex.test(alarmValue)) {
      showAlarm.innerText = alarmValue;
    }
  });



  if (alarmTime == alarmValue) {
    document.body.style.backgroundColor = 'red';
    alarmSound.play();

  }
};

setInterval(currentTime, 1000);

