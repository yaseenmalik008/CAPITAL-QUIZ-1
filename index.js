
var readlineSync = require('readline-sync')
score =0;
var userName = readlineSync.question("WHAT IS YOUR NAME? ")
console.log(`welcome ${userName}`)
var userMind = readlineSync.question("DO YOU WANT TO PLAY THIS CAPITAL QUIZ GAME? ")
 if(userMind.toUpperCase() === "yes".toUpperCase()){
   console.log( `${userMind} YOUR WELCOME`)
 
function play(questions,answer){
  var userAnswer = readlineSync.question(questions);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!")
  score = score + 1;
    console.log(`your score is: ${score}`)
  }else{
    console.log("Wrong!")
  }
  console.log("--------------")
}

var questions = [{
  question: "What is the capital of India? ",
  answer : "new delhi" 
},{
  question : "What is the cpital of China? ",
  answer : "beijing"
},{
  question : "what is the capital of France? ",
  answer : "paris"
},{
  question : "what is the capital of pakistan? ",
  answer : "islamabad"
},{
  question : "what is the capital of United States? ",
  answer : "washington d.c"
},{
  question : "what is the capital of United Kingdom? ",
  answer : "london" 
},{
   question : "what is the capital of Russia? ",
  answer : "moscow"  
},{
   question : "what is the capital of qatar? ",
  answer : "doha" 
},{
   question : "what is the capital of portugal? ",
  answer : "lisbon" 
},{
   question : "what is the capital of italy? ",
  answer : "rome" 
},{
   question : "what is the capital of cuba? ",
  answer : "havana" 
},{
   question : "what is the capital of afganistan? ",
  answer : "kabul" 
},{
   question : "what is the capital of japan? ",
  answer : "tokyo" 
},{
   question : "what is the capital of spain? ",
  answer : "madrid" 
},{
   question : "what is the capital of dubai? ",
  answer : "abu dhabi" 
}
  ]

for (i = 0 ; i< questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer)
}
console.log(`YAY YOU SCORED : ${score}`)
 }
else{
  
console.log('thanks for your time')
}