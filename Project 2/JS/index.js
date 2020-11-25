
const sec = 1000,
    minute = sec*60,
    hour = minute * 60,
    day = hour * 24;

var x = setInterval(function delay(){
    var c_day = new Date().getTime();
    var e_day = new Date('Dec 14, 2020 00:00:00').getTime()
    let diff = e_day - c_day;
    var days = Math.floor(diff / (day));
    var hours = Math.floor((diff % (day))/(hour));
    var minutes = Math.floor((diff % hour)/(minute));
    var seconds = Math.floor((diff % minute)/(sec));

    document.getElementById('days').innerText = days,
    document.getElementById('hours').innerText = hours,
    document.getElementById('minutes').innerText = minutes;
}, sec);

