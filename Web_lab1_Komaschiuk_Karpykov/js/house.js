// Show real time

function updateTime(){
  var time = new Date();

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.querySelector('.time-numbers').textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(updateTime, 1000);


// Light controls

var inputs = document.querySelectorAll('input[type="range"]');
var inputsLength = inputs.length;

for (var i = 0; i < inputsLength; i++) {
  inputs[i].oninput = function(){
    document.querySelector('.' + this.getAttribute('id')).style.opacity = 1 - this.value;
  }
}


// Gas controls

var labels = document.querySelectorAll('label');
var labelsLength = labels.length;

for (var i = 0; i < labelsLength; i++) {
  labels[i].onclick = function(){
    this.classList.toggle('label-active');
  }
}


// Temperature controls

var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var tempIndicator = document.querySelector('.temperature-value');
var tempValue = parseInt(tempIndicator.textContent);
var battery = document.querySelector('#temperature');

battery.style.fill = "hsl(" + (240 - ((tempValue - 10) * 12)) + ", 100%, 50%)";

plus.onclick = function(){
  if(tempValue < 30)
    tempValue++;
  tempIndicator.textContent = tempValue;
  battery.style.fill = "hsl(" + (240 - ((tempValue - 10) * 12)) + ", 100%, 50%)";
}

minus.onclick = function(){
  if(tempValue > 10)
    tempValue--;
  tempIndicator.textContent = tempValue;
  battery.style.fill = "hsl(" + (240 - ((tempValue - 10) * 12)) + ", 100%, 50%)";
}


// Message modal window

var message = document.querySelector('.messages-num');
var popup = document.querySelector('.popup');
var close = document.querySelector('.close-popup');

message.onclick = function(){
  this.classList.add('already-read');
  setTimeout(function(){ popup.classList.add('opened'); }, 50)
}

close.onclick = function(){
  popup.classList.remove('opened');
}
