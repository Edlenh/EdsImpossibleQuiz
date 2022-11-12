var timerEl = document.getElementById("timer");
var homeEl = document.getElementById("return")
var questionsEl = document.getElementById('question')
var answersEl = document.getElementById('answers')
var counter = 0;
var startButton = document.getElementById("start");



startButton.addEventListener("click", function(){
    timerEl.style.display="flex"
    document.getElementById("questions-form").style.display="block"
    document.getElementById("intro").style.display='none'
    document.getElementById("start").style.display="none"
    startTimer();
    nextQuestion();
})

//create timer function
function startTimer(){
timerEl.innerHTML="Time: "+ 60
var timedOut= setInterval(function(){
    timerEl.innerHTML="Time: "+ (60 - counter)
    counter++;
    //when there is 10 seconds left counter will turn red
    if (counter > 50) {
        timerEl.style.color = "red";
        }
    if(counter >= 61){
        clearInterval(timedOut);
        document.getElementById('end').style.display="block"
        startButton.style.display="none"
        timerEl.style.display="none"
        homeEl.style.display="block"
        document.getElementById("questions-form").style.display="none"
    }
},1000)
}


//creating question array 
const questions =[
    {
        question: 'What is ?',
        answers: [
            { text: '1', correct: true },
            { text: '2', correct: false },
            { text: '3', correct: false},
            { text: '4', correct: false},
        ]
    }
]

//creating function to show question

function listQuestions(question){
    questionsEl.innerHTML= questions.questions
}

function nextQuestion(){
    listQuestions(questions)
}

//create function for starting quiz
// function startQuiz(){
    
//     startTimer()
// }