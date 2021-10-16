// Array and Object of quiz questions
var score = 0;
var questionIndex = 0;
var correctAns = 0;
var time = 75;

var startGame = document.querySelector("#start-game")
var quizQuestion = document.getElementById("quiz-question");
var timeLeft = document.getElementById("timer")

var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");

var answerCheck = document.getElementById("answerCheck");

var linebreak = document.getElementById("linebreak").style.display = "none";

function unhideQuiz() {
    var x = document.getElementById("wrapper");
   document.getElementById("quizQuestion").style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    };
    console.log(document.getElementById("linebreak").style.display);
  
    // if(quizQuestion.style.display === "block") {
    //     quizQuestion.style.display = "none"
    // } else { quizQuestion.style.display = "block"}
};
console.log(choiceA)

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];

}
// check answer 
console.log(document.getElementById("linebreak").style.display);
function checkAnswer(answer) {

    var linebreak = document.getElementById("linebreak");
    console.log(document.getElementById("linebreak").style.display);
    linebreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        time -= 3;
        timeLeft.textContent = time;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
};

function choose0() { checkAnswer(0); }

function choose1() { checkAnswer(1); }

function choose2() { checkAnswer(2); }

function choose3() { checkAnswer(3); }

function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}











///Function that runs the game
startGame.addEventListener("click", function() {
    console.log("hello");
    console.log(document.getElementById("linebreak").style.display);
    // startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", choose0);
choiceB.addEventListener("click", choose1);
choiceC.addEventListener("click", choose2);
choiceD.addEventListener("click", choose3);

    unhideQuiz()
    var timer = setInterval(function() {
        if (time <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "GAME OVER!"
        } else {
            document.getElementById("timer").innerHTML = time
        }
        time -= 1;
    }, 1000);
    // document.getElementById(startGame).addEventListener
    nextQuestion()


});
////Question bank
var questions = [{
        question: "Which built-in method calls a function for each element in the array?",
        choices: ["while()", "loop()", "forEach()", "None of the above."],
        answer: "forEach()"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        quizQuest: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];