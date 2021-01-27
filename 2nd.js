//1. linking javascript to html
var startButton = document.querySelector("#start-button");//start button
var nextButton = document.querySelector("next-button"); //next-button
var question = document.querySelector("question"); //question
var answerButton = document.querySelector("answer-btn"); //answer-btn
var timerButton = document.querySelector("timer-btn"); //timerButton

var question = ""

//question array 
var multipleQuestion= ["What is addEventListener()?"]

var multipleAnswer =["attaches an event to another event without changing the event", "attaches an event to an element without overriding the original event."]

//keep track of questions
var  currentQuestionIndex = 0; //question
var  timerC; // timer count down

//start up button 
function startQuiz(event){
        startButton.classList.add("hide")
        // event.stopPropagation();
        console.log("start quiz", startButton)
}

//timer
function timerCount(){
        timerC = setInterval(startQuiz, 3000);
}



//next question
function nextQuestion(){
        
}

function showQuestion(question){
questionElement.innerText = question.question
}



//4. Create addEventListeners and loops 
startButton.addEventListener("click", startQuiz );//start  quiz addEventLister

timerC.addEventListener("click", timerCount );







// 1. create a function start button(reference startBtn)

        //needs add onclick Event
        //hide button after

//2. create a timer
        //create a variable name like ref = timerEl on DOM
        //Use set interval to run that timer 


//3. create question
    

//4. choices to the answer
    

//5. display question and choices
    //ref DOM
    //loop thru my questions
    //display question on DOM
    //loop thru to choices, in order to display choice on DOM

//6. if answer correct, show next question
        //check answer "==="

//7. if incorrect, subtract time
        //check answer "==="
        //time = time subtract 5 seconds  example: "time will" -  5 = "time"
        //create a next button for ANOTHER QUESTION

//8. when all questions answered, game over

//9. when time reaches 0, game over

//10. game over screen
