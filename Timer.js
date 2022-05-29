var second = 0;
var mili = 0;
var timerID = null;

function TimerTick()
{
    if (mili >= 9)
    {
        mili = 0; second += 1;
    }
    else
    {
        mili += 1;
    }
    var timerElem = document.getElementById("myTimer");
    timerElem.value = second + '.' + mili;
}

function starttimer()
{
    //uruchamian funkcjê cyklicznie co zadan¹ liczbê milisekund do u¿ycia funkcji clearInterval
    //lub zamkniêcia strony
    timerID = setInterval(TimerTick, 100, null);
}

function stoptimer()
{
    if(timerID!=null)
    clearInterval(timerID);
}