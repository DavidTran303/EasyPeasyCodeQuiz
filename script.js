const question = document.querySelector("#current-question");
const choice = Array.from(document.querySelectorAll(".choice-op"));
const qText = document.querySelector("#qText");//questions
const currentScore = document.querySelector("#currentScore");
const timer = document.querySelector("#timer")

//important local variables
let timer = 0
let score = 0
let currentQuestion = {}
let correctAnswers = true
let theQuestions = []

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

const scorepoints = 100
const maxquestions = 3
const currentTime = 15 

function startGame(){
    timer++;
    score = 0;
    theQuestions = [...question];
    nextQuestion();
}

// function nextQuestion(){
// if(theQuestions.length === 0 || )

// }