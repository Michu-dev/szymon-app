var clockID = null; //uchwyt do funkcji rozpocz�tej z op�nieniem
var timerRunning = false;

function showtime()
{

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var now = new Date();
    var days = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear(); 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var dateValue = days + "-" + monthNames[month] + "-" + year;
    var timeValue = ((hours > 12) ? hours - 12 : hours);
    if (timeValue == "0") timeValue = 12;
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue += (hours >= 12) ? " PM" : " AM";
    var clock = document.getElementById("clock");
    var date = document.getElementById("date");
    date.value = dateValue;
    clock.value = timeValue;
    clockID = setTimeout("showtime()", 1000); //przypisanie do uchwytu clockID konkretnej funkcji
}
function startclock() 
{
    timerRunning = true;
	showtime();
}

function stopclock()
{
    if (timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}

