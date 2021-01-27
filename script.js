const question = document.querySelector("#question-number");
const choice = Array.from(document.querySelectorAll(".choice-op"));
const qText = document.querySelector("#current-question");
const currentScore = document.querySelector("#score");
const timeStart = document.querySelector("#timer")

//important local variables
let timerClock;
let score = 0
let currentQuestion = {}
let correctAnswers = true
let theQuestions = []
let qArrayIndex =  0

let questions = [
    {
        question: "What language use addEventListener()?",
        choice1: "Javascript",
        choice2: "HTML",
        choice3: "CSS",
        choice4: "Ben",
        answer: 1, 
    
    },

    {
        question: "Which language is used to style HTML?",
        choice1: "HTML",
        choice2: "Python",
        choice3: "Javascript",
        choice4: "CSS",
        answer: 4, 
    
    },

    {
        question: "What language use querySelector?",
        choice1: "CSS",
        choice2: "Javascript",
        choice3: "HTML",
        choice4: "Vietnamese",
        answer: 2,
    
    },

]
let timer = (questions.length * 5) 

const scorepoints = 100
const maxquestions = 3
const currentTime = 15 

window.onload = function(){
    
}


function startGame(){
    document.getElementById("start-quiz").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";    
    timerClock = setInterval(countDown, 1000);
    score = 0;
    nextQuestion();  
}

function nextQuestion(){
    var currentQuestion = questions[qArrayIndex]
       
    var questionText = currentQuestion.question
    var choiceA = currentQuestion.choice1
    var choiceB = currentQuestion.choice2
    var choiceC = currentQuestion.choice3
    var choiceD = currentQuestion.choice4
    var answer = currentQuestion.answer

    
    console.log(choiceA)
    document.getElementById("current-question").innerHTML = questionText

    document.querySelector("#choice-a").innerHTML = choiceA
    document.getElementById("choice-b").innerHTML = choiceB
    document.getElementById("choice-c").innerHTML = choiceC
    document.getElementById("choice-d").innerHTML = choiceD
     document.getElementById("score").innerHTML = score
}

function countDown(){
    timer--;
    console.log(timer);
    document.getElementById("timer").innerText = timer
    
    if(timer <= 0){
        quizStop();
    }
}

function quizStop(){
    clearInterval(timerClock) 

}



// function nextQuestion(){
// if(theQuestions.length === 0 || )

// }