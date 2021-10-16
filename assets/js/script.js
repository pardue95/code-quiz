// Array and Object of quiz questions
var score = 0;
var questionIndex = 0;
var correctAns = 0;
var time = 75;

var startGame = document.querySelector("#start-game");
var quizQuestion = document.getElementById("quiz-question");
var timeLeft = document.getElementById("timer");


var choice0 = document.getElementById("btn0");
var choice1 = document.getElementById("btn1");
var choice2 = document.getElementById("btn2");
var choice3 = document.getElementById("btn3");

var answerCheck = document.getElementById("answerCheck");

var linebreak = (document.getElementById("linebreak").style.display = "none");

function unhideQuiz() {
	var x = document.getElementById("wrapper");
	document.getElementById("quiz-question").style.display = "block";
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}


function nextQuestion() {
	questionTitle.textContent = questions[questionIndex].question;
	choice0.textContent = questions[questionIndex].choices[0];
	choice1.textContent = questions[questionIndex].choices[1];
	choice2.textContent = questions[questionIndex].choices[2];
	choice3.textContent = questions[questionIndex].choices[3];
}
// check answer

function checkAnswer(answer) {
	var linebreak = document.getElementById("linebreak");

	linebreak.style.display = "block";
	answerCheck.style.display = "block";

	if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
		// correct answer, add 7 score to final score
		correctAns += 7;

		answerCheck.textContent = "Correct!";
	} else {
		// wrong answer, deduct 3 second from timer
		time -= 3;
		correctAns -= 2;
		timeLeft.textContent = time;
		answerCheck.textContent = "Wrong!";
	}

	questionIndex++;
	// ask next question
	if (questionIndex < questions.length) {
		nextQuestion();
	} else {
		// if no more question, run game over function
		gameOver();
	}
}

function choose0() {
	checkAnswer(0);
}

function choose1() {
	checkAnswer(1);
}

function choose2() {
	checkAnswer(2);
}

function choose3() {
	checkAnswer(3);
}

function gameOver() {
	console.log(quizQuestion)
	summary.style.display = "block";
	quizQuestion.style.diplay = "none";
	wrapper.style.display = "none";
	timeLeft.style.display = "none";
	//    timesUp.style.display = "block";

	// show final score
	finalScore.textContent = correctAns;
}

///Function that runs the game
startGame.addEventListener("click", function () {


	// startQuizBtn.addEventListener("click", newQuiz);
	choice0.addEventListener("click", choose0);
	choice1.addEventListener("click", choose1);
	choice2.addEventListener("click", choose2);
	choice3.addEventListener("click", choose3);

	unhideQuiz();
	var timer = setInterval(function () {
		if (time <= 0) {
			clearInterval(timer);
			document.getElementById("timer").innerHTML = "GAME OVER!";
		} else {
			document.getElementById("timer").innerHTML = time;
		}
		time -= 1;
	}, 1000);

	nextQuestion();
});
////Question bank
var questions = [{
		question: "Which built-in method calls a function for each element in the array?",
		choices: ["while()", "loop()", "forEach()", "None of the above."],
		answer: "forEach()",
	},
	{
		question: "The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		question: "Arrays in Javascript can be used to store ____.",
		choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
		answer: "all of the above",
	},
	{
		question: "String values must be enclosed within ____ when being assigned to variables.",
		choices: ["commas", "curly brackets", "quotes", "parentheses"],
		answer: "quotes",
	},
	{
		question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
		choices: ["Javascript", "terminal / bash", "for loops", "console log"],
		answer: "console log",
	},
];