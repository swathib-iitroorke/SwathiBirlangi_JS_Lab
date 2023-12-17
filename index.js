// Quiz
//     questions
//     score
//     questionIndex

// Question
//     questionText
//     answer
//     choices

// TODO: Question functional constructor

//isEnded
// 0 1 2 3
// question.length =

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.checkOptionWithAnswer = function(userAnswer) {
    if (this.getQuestionByIndex().isCorrectAnswer(userAnswer)) {
        this.score++;
    }
    this.questionIndex++;
}

function Question(questionText, choices, answer) {
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(userAnswer) {
    return this.answer === userAnswer;
}

function loadQuestions() {
    //if quiz is ended
    //else
    //load questions
    if (quiz.isEnded()) {
        showScores();
    } else {
        // console.log(quiz.getQuestionByIndex().choices);
        //show question
        let question = quiz.getQuestionByIndex();
        var element = document.getElementById("question");
        element.innerHTML = question.questionText;

        //show options
        //in a for loop
        //Only update the options
        //TODO: event handles
        // show options
        var choices = question.choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }

        //show question progress
        showProgress();
    }
}

function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }

}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Scores</h1>";
    gameOverHTML += "<h2> Your total score: " + quiz.score + " and percentage is: " + (quiz.score / questions.length * 150) + "%" + "</h2>";
    document.getElementById("quiz").innerHTML = gameOverHTML;
};

let questions = [
    new Question("Capital of India", ["New Delhi", "Uttar Pradesh", "Bihar", "Andhra Pradesh"], "New Delhi"),
    new Question("Which is the largest coffee-producing state of India?", ["Kerala", "Tamil Nadu", "Karnataka", "Arunachal Pradesh"], "Karnataka"),
    new Question("In what state is Elephant Falls located?", ["Mizoram", "Orissa", "Manipur", "Meghalaya"], "Meghalaya"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

let quiz = new Quiz(questions);

loadQuestions();

//getQuestionByIndex
// return the questionIndex question from questions array

//checkOptionWithAnswer...userAnswer as an argumen
//something... TODO

//Question
// isCorrectAnswer arg userAnswer
//return answer===userAnswer