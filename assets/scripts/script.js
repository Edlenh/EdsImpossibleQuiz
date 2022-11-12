var timerEl = document.getElementById("timer");
timerEl.innerHTML="Time: "+ 0;
var counter = 0;

var startButton = document.getElementById("start");



startButton.addEventListener("click", function(){
    document.getElementById('timer').style.display="block"
    document.getElementById('questions-form').style.display="block"
    document.getElementById('intro').style.display='none'
    document.getElementById('start').style.display="none"
    startTimer();
})

function startTimer(){
timerEl.innerHTML="Time: "+ 0
var timedOut= setInterval(function(){
    timerEl.innerHTML="Time: "+ (60 - counter)
    counter++;
    if(counter >= 61){
        clearInterval(timedOut);
        document.getElementById('end').style.display="block"
        document.getElementById('start').style.display="none"
    }
},1000)
}
