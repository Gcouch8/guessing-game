var questions = ['Did I grow up in Minnesota?',
                 'Was I a member of the US Olympic Curling Team?',
                 'Have I been volcano boarding?',
                 'How old am I?',
                 'Do I have two dogs?',
                 'How many cats do I have?'
                ];

var answers = ['yes', 'no', 'yes', 25, 'yes', 2]

var correct = ["That's correct, have you been following me?",
               "That's correct, sadly I didn't make team.",
               "That's correct, and the volcano is active!",
               "That's correct, a quarter of a century. How time flies.",
               "That's correct, two big dogs, Boomer and Jax!",
               "That's correct, Baggins and Chirp!"
              ];

var wrong = ["That's incorrect. Oh ya you betcha I grew up in Minnesota",
            "That's incorrect. Maybe they would've won gold that year with me.",
            "That's incorrect. It's like you don't even know me.",
            "That's incorrect. Couldn't live without my best buds.",
           ];

// Stores incorrect responses for questions that require a number as an answer
var wrongNumber1 = [ "That's incorrect. Do you really think I'm that old?",
                     "That's incorrect. I'm flattered, but I'm not that young.",]

var wrongNumber2 = ["That's incorrect. I'm not a crazy cat person, at least I hope not.",
                    "That's incorrect. I've got more than that."]

var images =['images/minnesota.gif',
            'images/curling1.jpg',
            'images/volcano1.jpg',
            'images/birthday.jpg',
            'images/dogs.jpg',
            'images/catstache.jpg'
            ]



//  Targets 'begin' button
var button = document.getElementById('start');

var finalScore = 0;

// Adds event listener to button
start.addEventListener('click', function(event){
    question1.runGame(document.getElementById('aOne'), document.getElementById('imageOne'));
    question2.runGame(document.getElementById('aTwo'), document.getElementById('imageTwo'));
    question3.runGame(document.getElementById('aThree'), document.getElementById('imageThree'));
    question4.runGame(document.getElementById('aFour'), document.getElementById('imageFour'));
    question5.runGame(document.getElementById('aFive'), document.getElementById('imageFive'));
    question6.runGame(document.getElementById('aSix'), document.getElementById('imageSix'));
    finalResult();
});

    var counter = 0;

// Creates object for the guessing game with the needed data for each question passed in as arguments
var GuessingGame = function (question, answer, results) {
    this.question = question;
    this.answer = answer;
    this.correct = results.correct;
    this.wrong = results.wrong || results.wrongNumberLow || results.wrongNumberHigh;
    this.image = results.image;
    // Runs the game.
    this.runGame = function(element1, element2) {
        var response = prompt(this.question);
        response=response.toLowerCase();
        if (this.answer == 'yes' || this.answer == 'no') {
            if (response == this.answer) {
               element1.innerHTML = this.correct;
               element2.src = this.image;
               finalScore++;
               counter++;

            } else {
                element1.innerHTML = this.wrong;
                counter++;
            }
        // If the answer is a number
        } else {
            if (Number(response) < this.answer) {
                element1.innerHTML = results.wrongNumberLow;
                counter++;
            }
            if (Number(response) > this.answer) {
                element1.innerHTML = results.wrongNumberHigh;
                counter++;
            }
            if (Number(response) == this.answer) {
                element1.innerHTML = this.correct;
                element2.src = this.image;
                finalScore++;
                counter++;
            }
        }
    }

    };

function finalResult(){
       if(counter === 6){
        //An alert to let the user know the number of correct questions
          alert("You got " + finalScore +"/6 correct!");

        //A bonus message dependent on the number of correct questions
          if (finalScore >= 4){
            alert("You know me so well, let's be best friends!");
          };
          if (finalScore <= 3){
            alert("It's okay, I probably don't know much about you either");
        };
    };
};

// Instances of GuessingGame object \\
var question1 = new GuessingGame(questions[0], answers[0], {correct: correct[0], wrong: wrong[0], image: images[0]});
var question2 = new GuessingGame(questions[1], answers[1], {correct: correct[1], wrong: wrong[1], image: images[1]});
var question3 = new GuessingGame(questions[2], answers[2], {correct: correct[2], wrong: wrong[2], image: images[2]});
var question4 = new GuessingGame(questions[3], answers[3], {correct: correct[3], wrongNumberHigh: wrongNumber1[0], wrongNumberLow: wrongNumber1[1], image: images[3]});
var question5 = new GuessingGame(questions[4], answers[4], {correct: correct[4], wrong: wrong[3], image: images[4]});
var question6 = new GuessingGame(questions[5], answers[5], {correct: correct[5], wrongNumberHigh: wrongNumber2[0], wrongNumberLow: wrongNumber2[1], image: images[5]});

