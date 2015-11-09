var GuessingGame = function(question, answer, results) {
    this.question = question;
    this.answer = answer;
    this.correct = results.correct;
    this.wrong = results.wrong;
    this.image = results.image;
    this.renderCorrect = function() {
        var s = document.createElement('img').setAttribute('src', this.image);
        var p = document.createElement('p');
        p.innerHTML = this. correct;
    };
    this.renderWrong = function() {
        var s = document.createElement('p');
        s.innerHTML = this.wrong;
    };
    this.runGame = function() {
        console.log(this.question);
        var x = prompt(this.question);
    //     if (this.answer == 'yes') {
    //         if (this.answer == x){
    //             this.renderCorrect();
    //         } else {
    //             this.renderWrong();
    //         }
    //     } else if (typeof(this.answer) == 'number') {
    //         if (x < this.answer) {
    //             y = crea
    //         }
    //     }
    }
};

var question1 = new GuessingGame(questions[0], answers[0], {correct: correct[0], wrong: wrong[0], image: images[0]});
var question2 = new GuessingGame(questions[1], answers[1], {correct: correct[1], wrong: wrong[1], image: images[1]});
var question3 = new GuessingGame(questions[2], answers[2], {correct: correct[2], wrong: wrong[2], image: images[2]});
var question4 = new GuessingGame(questions[3], answers[3], {correct: correct[3], wrong: wrong[3], image: images[3]});
var question5 = new GuessingGame(questions[4], answers[4], {correct: correct[4], wrong: wrong[4], image: images[4]});
var question6 = new GuessingGame(questions[5], answers[5], {correct: correct[5], wrong: wrong[5], image: images[5]});



var button = document.getElementById('start');

start.addEventListener('click', function(event){
    question1.runGame();
    question2.runGame();
    question3.runGame();
    question4.runGame();
    question5.runGame();
    question6.runGame();
});
// question1.runGame();
