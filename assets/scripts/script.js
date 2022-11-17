var timerEl = document.getElementById("timer");
var homeEl = document.getElementById("return");
var endEl= document.getElementById("end")
var questionBoxEl = document.getElementById('question-box')
var question =document.getElementById('question')
var answersEl = document.getElementById('answer-buttons')
var scoreEl = document.getElementById('score')
const choices = Array.from(document.querySelectorAll('.choice'));
var numQuestions= 6
//set index of questions, default is 0
var currentQuestion ={}
var counter = 0;
var score = 0;
var correctScore= 100

//initialize start menu buttons and nav. 
var startButton = document.getElementById("start");
var ruleButton =document.getElementById('rules-tab')
var scoreButton= document.getElementById('highscore-list')


//creating question array 
var availableQuestions= []
let questionCounter=0
let questions =[
  {
      question: 'Which of the following boxers is the only one to win world titles in eight different divisions?',
        
           choice1: 'Floyd Mayweather Jr', 
           choice2: 'Manny Pacquiao', 
           choice3: 'Mike Tyson', 
           choice4: 'Miguel Cotto',
           answer: 2,
           
      
  },

  {
    question: "Which Photographer is famous for black and white photos at Yosemite National Park?",
    
       choice1: 'Ansel Adams', 
       choice2: 'Dorothea Lange', 
       choice3: 'André Kertész ', 
       choice4: 'Annie Leibovitz', 
       answer: 1,
      
    
  },
  {
    question: 'Who won the Superbowl in the 2021-2022 season?',
   
       choice1: 'Seattle Seahawks', 
       choice2: 'New England Patriots', 
       choice3: 'Kansas City Chiefs',
       choice4: 'Los Angeles Rams', 
       answer: 4,
    
  },
  {
    question: 'What year did the first Star Wars movie come out?',
    
       choice1: '1976', 
       choice2: '1977', 
       choice3: '1975', 
       choice4: '1980', 
      answer: 2,
    
  },
  {
    question: 'Which of these movie directors specializes in horror?',
    
       choice1:'Wes Anderson',
       choice2: 'George Lucas', 
       choice3: 'George A Romero', 
       choice4: 'Nora Ephron', 
       answer: 3,
    
  },
  
  {
      question: 'A dog sweats through which part of its body?',
      
        choice1: 'Paws', 
        choice2: 'Mouth',
        choice3: 'Ears', 
        choice4: 'Nose',
        answer:1,
      
    }
]

//start game on click
startButton.addEventListener("click", function(){
  timerEl.style.display="flex"
  questionBoxEl.style.display="block"
  document.getElementById("intro").style.display="none"
  document.getElementById("start").style.display="none"
  document.getElementById("header").style.display="none"
    startQuiz();
   
})

//show rules on click 
ruleButton.addEventListener("click", function(){
    document.getElementById("intro").style.display="none"
    document.getElementById("ruleset").style.display="block"
    document.getElementById("header").style.display="none"

})

//show highscores on click
scoreButton.addEventListener("click", function(){
  document.getElementById("intro").style.display="none"
  document.getElementById("highscores").style.display="block"
  document.getElementById("header").style.display="none"
})



//create start function
function startQuiz(){
  
    startTimer();
    questionCounter=0
    score=0
    availableQuestions =[...questions]
    getNewQuestion()
}


//create timer function
function startTimer(){
timerEl.innerHTML="Time: "+ 60;
scoreEl.innerHTML="Score: "+ 0;
scoreEl.style.display="flex"
var timedOut= setInterval(function(){
    timerEl.innerHTML="Time: "+ (60 - counter)
    counter++;
    //when there is 10 seconds left counter will turn red
    if (counter > 50) {
        timerEl.style.color = "red";
        }
    //when timer hits 0 clear out the timer and question box
    //calculate score 
    if(counter >= 61){
      gameEnd()
    }
},1000)
}

//create function for end of game
function gameEnd(){
  startButton.style.display="none"
  timerEl.style.display="none"
  homeEl.style.display="block"
  questionBoxEl.style.display="none"
  endEl.style.display="block"
  endEl.innerHTML="You're final score is " + score;
}


//create function to set next question
function getNewQuestion(){
  if(availableQuestions.length === 0 || questionCounter > numQuestions) {
    gameEnd()
  }
 questionCounter ++
 //randomize which question comes up
 const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
  //appending the answer into the answer boxes
    choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
  })

  //remove question from available question array
  availableQuestions.splice(questionsIndex, 1)

}

choices.forEach(choice => {
  choice.addEventListener('click', event => {
    
    //assign each answer as a target when clicked
      const selectedChoice = event.target
      const selectedAnswer = selectedChoice.dataset['number']
      
      let answerCorrect = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

      if(answerCorrect === 'correct') {
          addScore(correctScore)
      }
      else{
        counter+=5;
      }

      selectedChoice.parentElement.classList.add(answerCorrect)
      getNewQuestion()
  })
})

addScore = num => {
  score +=num
  scoreEl.innerText = "Score:" + score
}



