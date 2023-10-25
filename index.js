var readlineSync = require("readline-sync")
var question = readlineSync.question("What's your name? ")
var score = 0
console.log("Welcome " + question + " to Do YOU kNOW ME")

function playQuiz(question, answer) {
  var question = readlineSync.question(question)
  if (question.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right")
    score = score + 1
    console.log(score)
  } else {
    console.log("You are wrong")
  }
}

var questionlist = [
  {
    question: "Where are you live? ",
    answer: "Rajasthan"
  },
  {
    question: "What is your hobbie? ",
    answer: "playing"
  },
  {
    question: "Which is your favorite game? ",
    answer: "cricket"
  },
  {
    question: "Where are you learning web developing? ",
    answer: "From youtube"
  }
]

for (var i = 0; i < questionlist.length; i = i + 1) {
  playQuiz(questionlist[i].question, questionlist[i].answer)
}

console.log("Final Score " + score)
