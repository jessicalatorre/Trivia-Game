
$(document).ready(function () {
    // $('.btn-btn-primary-btn-lg').click(function () {
    console.log("test!");

// $(document).on('click', '#startButton', function(e) {
//     game.start();
// });

// start: function() {
//     timer = setInterval(game.countdown, 1200);

//     $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
//     $('#start').remove();

// }

var CorrectAnswers = 0;
var IncorrectAnswers = 0;
var Unanswered = 0;
// var myVar = setInterval(myTimer ,1000);

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

var answerChoices =[
["90 million","80 billion", "120 million", "3 billion"],
["$1 for every $10 spent", "$1 for every $50 spent", "$1 for every $100 spent", "$1 for every $1,000 spent"],
["Enough to power a microwave for 30 minutes","Enough to power the average American home for 4 days", "Enough to power a computer for 15 minutes", "Enough to power a TV for 3 hours"], 
["2 times", "0.5 times", "3 times", "None, it takes more energy to recycle"], 
["20 years","150 years","4000 years", "It will never break down"], 
["2 hours", "6 hours", "45 minutes","20 minutes"], 
["Yes", "No", "No idea"],
["25%","50%","75%","100%"],
["150 gallons","500 gallons","310 gallons","750 gallons"],
["1 tree","5 trees","7 trees","15 trees"],
];

var answerKey = ["1", "0", "3", "0", "2", "3","0","0","1","3"];

$('#correctAnswers').hide();
$('#incorrectAnswers').hide();
$('#unanswered').hide();
$('#timer').hide();

//write questions function. purpose is to only write questions onto screen
function writeQuestion() {
    for(i=0; i< questions.length; i++) {
        var questionDiv = $("<div>"); //this is the container
        var questionP = $("<br><p>") // p tag created
        questionP.text(questions[i]); // copying  question to p tag
        questionDiv.append(questionP); // now we append to the the p tag (questionP) to the div containter in the DOM

    // inside our for loop create a class for questions, so we can add a style/attribute to the class. state name of variable first.
    questionDiv.addClass("questionStyle");
    
    //now we add an attribute and that is going to be the correct answer to the question
    questionDiv.attr("data-question-value", answerKey[i]);

    //then at some point, we're going to compare user answer with the actual answer (data-question-value variable which will be holding the correct answer). If correc the wins counter will go up.

 //making another container to radio buttons/answers. Ensure this is not in for loop only need one container created per question not every radio button
    // var answerChoicesDiv = $("<div>");

    //loop over each answer choice before appending to the question id (list of questions in browser)
        for (var j = 0; j < answerChoices[i].length; j++) {
          var radButton = $('<br><input>'); //when creating elements for DOM they're inside < >; only use these for elements!!!
          radButton.attr('type', 'radio');//set the attribute of type to radio
          radButton.attr('name', 'answer-choice-' + i);//set the attribute of type to radio
          //and index will lose it's type once the value goes the html, so it will be reflected as a sting, even though you're trying trying assign indeces of j to a value.
          radButton.attr('value', j);//set the value for the radio input button; value is assigned to j value
          radButton.text(answerChoices[i][j]); //this will write the questions at index and the answers at index
          questionDiv.append(radButton);
          questionDiv.append(answerChoices[i][j]);
          console.log(radButton);
        }
    

    //now we going to append our question to the questions id onthe html page (make it render). Every time we write a questions, we append (one at a time). If we used write, it wold be replaced each time. Append will add to the list each time the for loop runs.
    //use jquery to add 
        $('#questionID').append(questionDiv); //at first the write Question only had a p tag and line break tag; then I added a class. Then I added an attr. Now I'll appending all those details to the DOM: One will be rendered visually; the others will be stored.

        // append answer choices
        // writeAnswerChoicesForQuestion(i);
    }
 
    $('#submit').on('click', function() {
        $('#correctAnswers').show();
        $('#incorrectAnswers').show();
        $('#unanswered').show();
        $('#timer').show();
        $(questionDiv).hide(); //Trying to hide all questions answers, so only results will populate
        var questionDivs = $('.questionStyle'); // this gives us an array of all the question divs
        // $.each(elementsToLoopOver, cb);
        // questionDivs.each(cb);
        $.each(questionDivs, function (index) { //look more on jquery .each.
            var userSelectedAnswerChoiceInput = $(this).find('input:checked'); //this is the question div and .find is looking in the question div and trying to find which user input option is checked (which answer selected)
            var userSelectedAnswerChoiceIndex = userSelectedAnswerChoiceInput.val();
            console.log("the user selected" + userSelectedAnswerChoiceIndex);

            console.log(answerKey[index], userSelectedAnswerChoiceIndex);

            //////Below is a sample if statement that compares the value of the user input with the corresonding answerChoice[i] for that question. Need to put together this logic for each question.
            // if ($(this).val() === answerChoices[indexpositionofthequestionhere].correctAnswer). 
            if (userSelectedAnswerChoiceIndex === answerKey[i]) {
                console.log('got question ' + index + ' correct!')
                $('#correctAnswers').append(userSelectedAnswerChoiceIndex);
                CorrectAnswers++;
            } else {
                console.log('got question ' + index + ' incorrect!')
                $('#incorrectAnswers').append(userSelectedAnswerChoiceIndex);
                IncorrectAnswers++;
            } if 
                (userSelectedAnswerChoiceIndex === " ") {  
                $('#unanswered').append(userSelectedAnswerChoiceIndex);
                Unanswered++;
                }

    $('#correctAnswers').append(CorrectAnswers);
            // console.log();
        })
    });
}



// function writeAnswerChoicesForQuestion(indexForQuestion) {
//     var answerChoicesForQuestion = answerChoices[indexForQuestion];
//     console.log(answerChoicesForQuestion);
//     //Jose's example
//     for (var i = 0; i < answerChoices.length; i++) {
//         for (var j = 0; j < answerChoices[i].length; j++) {
//           var answers = $('#answers');
//           var radButton = $('<button>'); //when creating elements for DOM they're inside < >
//           radButton.text(answerChoices[i][j]);
//           answers.append(radButton);
        // }
//       }

    // $('<div><input type="radio" name="answerButton" />' + [j][0] + '</div>');
    // // 
    // }

    //onclick for start button; this will load questions and answers
$(".btn-primary").click(writeQuestion);


// function start () {
//Need to have time start when Start button clicked
//var timer = setInterval(game.countdown, 1000);

//onclick to render user quiz results
// $(".submit").click();
// console.log("this is a test!");
});