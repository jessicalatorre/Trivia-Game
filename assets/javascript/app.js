//pseudo code:
//quiz will start after player clicks on start quiz button
//will need to ready document and use and onclick event to load quiz
//A setTimer will be displayed counting down fo 1 minutes. set interval as well
//All 10 questions will be displayed (dynamically created via JS)
//Another array for answer choices
// third array for answer key.
//function - write question - then for loop to display questions from questions (only to display on screen)
//loop to display questions to display questions onto screen.
onclick function
//the player will only be able to click one multiple choice answer
//Will have Finished button at end - need onclick event to show results
//correct Answers:
//Incorrect Answers:
//Unanswered:
//If time runs results will also display

$(document).ready(function () {
    // $('.btn-btn-primary-btn-lg').click(function () {
    alert("test!");
});
 
var questions =
["On average, how many aluminum soda cans are used in the United States each year?",
"What percentage of monetary purchasing goes to packaging materials?", 
"How much energy does recycling just one aluminum can save?",
"Recycling plastic saves ______ times as much energy as burning it in an incinerator.",
"A typical glass bottle would take _____ years or more to decompose.",
"The US Department of Energy (DOE) recommends turning off the monitor and placing the computer on sleep mode if you are not going to use it for more than___.",
"Do items such as cell phone chargers, fans, coffeemakers, desktop printers, radios, etc. consume energy even when they are turned off?",
"Compact Florescent Lighting -CFLs- use ______ of the energy needed for incandescent bulbs.",
"How many gallons of motor gasoline does the average American consume in one year?",
"How much does the average American consume in paper, wood, and other products made from trees each year?",];

var answerChoices =
[["90 million","80 billion", "120 million", "3 billion"], ["$1 for every $10 spent", "$1 for every $50 spent", "$1 for every $100 spent", "$1 for every $1,000 spent"], [], [], [], [], 
];

var answerKey = ["80 billion", "$1 for every $10 spent"];

//write questions function. purpose is to only write questions onto screen

function writeQuestion() {
    for(i=0; i< questions.length; i++) {
    var writeQuestion = $("<br><p>" + questions[i] + "</p></br>"); //closing br tag must go after p tag

    // inside our for loo create a class for questions, so we can add a style/attribute to the class. state name of variable first.
    writeQuestion.addClass("questionStyle");
    
    //now we add an attribute and that is going to be the correct answer to the question
    writeQuestion.attr("data-question-value", answerKey[i]);

    //then at some point, we're going to compare user answer with the actual answer (data-question-value variable which will be holding the correct answer). If correc the wins counter will go up.

    //now we going to append our question to the questions id onthe html page (make it render). Every time we write a questions, we append (one at a time). If we used write, it wold be replaced each time. Append will add to the list each time the for loop runs.
    //use jquery to add 
    $('#questionID').append(writeQuestion); //at first the write Question only had a p tag and line break tag; then I added a class. Then I added an attr. Now I'll appending all those details to the DOM: One will be rendered visually; the others will be stored.

    //NEXT STEPS: Inside this existing existing for loop, create another for loop with the answers for the answer choice and create the radio buttons. Don't use i use another letter (maybe letter j)

    for(j=0;j<answerChoices; j++);
    var writeAnswer = $("<p>" + answerChoices[j] + "</p>");
 }
}
