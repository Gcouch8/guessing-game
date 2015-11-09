//  Targets 'begin' button \\
var button = document.getElementById('start');

// Adds event listener to button \\
start.addEventListener('click', function(event){
    question1.runGame(document.getElementById('aOne'), document.getElementById('imageOne'));
    question2.runGame(document.getElementById('aTwo'), document.getElementById('imageTwo'));
    question3.runGame(document.getElementById('aThree'), document.getElementById('imageThree'));
    question4.runGame(document.getElementById('aFour'), document.getElementById('imageFour'));
    question5.runGame(document.getElementById('aFive'), document.getElementById('imageFive'));
    question6.runGame(document.getElementById('aSix'), document.getElementById('imageSix'));
});


// Ccreates object for the guessing game with the needed data for each question passed in as arguments \\
var GuessingGame = function(question, answer, results) {
    this.question = question;
    this.answer = answer;
    this.correct = results.correct;
    this.wrong = results.wrong || results.wrongNumberLow || results.wrongNumberHigh;
    this.image = results.image;
    // Runs the game. I reference the specific elements from the HTML page when calling runGame() \\
    this.runGame = function(element1, element2) {
        var response = prompt(this.question);
        if (this.answer == 'yes' || this.answer == 'no') {
            if (response == this.answer) {
               element1.innerHTML = this.correct;
               element2.src = this.image;
            } else {
                element1.innerHTML = this.wrong;
            }
        // If the answer is a number \\
        } else {
            if (response < this.answer) {
                element1.innerHTML = results.wrongNumberLow;
            }
            if (response > this.answer) {
                element1.innerHTML = results.wrongNumberHigh;
            }
            if (response == this.answer) {
                element1.innerHTML = this.correct;
                element2.src = this.image;
            }
        }
    }
};

// Instances of GuessingGame object \\
var question1 = new GuessingGame(questions[0], answers[0], {correct: correct[0], wrong: wrong[0], image: images[0]});
var question2 = new GuessingGame(questions[1], answers[1], {correct: correct[1], wrong: wrong[1], image: images[1]});
var question3 = new GuessingGame(questions[2], answers[2], {correct: correct[2], wrong: wrong[2], image: images[2]});
var question4 = new GuessingGame(questions[3], answers[3], {correct: correct[3], wrongNumberHigh: wrongNumber1[0], wrongNumberLow: wrongNumber1[1], image: images[3]});
var question5 = new GuessingGame(questions[4], answers[4], {correct: correct[4], wrong: wrong[3], image: images[4]});
var question6 = new GuessingGame(questions[5], answers[5], {correct: correct[5], wrongNumberHigh: wrongNumber2[0], wrongNumberLow: wrongNumber2[1], image: images[5]});




