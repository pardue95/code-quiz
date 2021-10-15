// Array and Object of quiz questions
var score = 0;
var questionIndex = 0;
var time = 75;

var startGame = document.querySelector("#start-game")
var quizQuestion = document.getElementById("quiz-question");
function unhideQuiz() {
    var x = document.getElementById("wrapper");
   document.getElementById("quizQuestion").style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    };
    console.log(document.getElementById("wrapper").style.display);
    // if(quizQuestion.style.display === "block") {
    //     quizQuestion.style.display = "none"
    // } else { quizQuestion.style.display = "block"}
};




function playQuiz() {


}

///Function that runs the game
startGame.addEventListener("click", function() {
    console.log("hello")

    unhideQuiz()
    var timer = setInterval(function() {
        if (time <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Out Of TIME!!"
        } else {
            document.getElementById("timer").innerHTML = time
        }
        time -= 1;
    }, 1000);
    // document.getElementById(startGame).addEventListener


});
////Question bank
var questions = [{
        quizQuest: "Which built-in method calls a function for each element in the array?",
        choices: ["while()", "loop()", "forEach()", "None of the above."],
        answer: "forEach()"
    },
    {
        quizQuest: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        quizQuest: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        quizQuest: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        quizQuest: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];