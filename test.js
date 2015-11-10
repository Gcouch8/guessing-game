var button = document.getElementById('start');

start.addEventListener('click', function(event){
  question1.runGame();
  question2.runGame();
  question3.runGame();
  question4.runGame();
  question5.runGame();
  question6.runGame();
});

var GuessingGame = function() {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
    this.wrong = wrong;
    this.wrong2= wrong2;
    this.image = image;
    this.renderCorrect = function() {
        var s = document.createElement('img').setAttribute('src', this.image);
        var p = document.createElement('p');
        p.innerHTML = this. correct;
        finalScore++;
    };
    this.renderWrong = function() {
        var s = document.createElement('p');
        s.innerHTML = this.wrong;
    };
    this.renderWrong2 = function(){
        var l = document.createElement('p');
        l.innerHTML=this.wrong2;
    }
    this.runGame = function() {
        var x = prompt(this.question);

        if (this.answer == 'yes') {
            if (this.answer == x){
                this.renderCorrect();
            }
            else {
                this.renderWrong();
            }
        } else if (typeof(this.answer) == 'number') {
            if (x < this.answer) {
               this.renderWrong();
            }
            else if (x === this.answer){
                this.renderCorrect();

            }
            else{
               this.renderWrong2();
            }


        }
    }
};


var question1 = new GuessingGame(questions[0], answers[0], correct[0], wrong[0], images[0]);
var question2 = new GuessingGame(questions[1], answers[1], correct[1], wrong[1], images[1]);
var question3 = new GuessingGame(questions[2], answers[2], correct[2], wrong[2], images[2]);
var question4 = new GuessingGame(questions[3], answers[3], correct[3], wrong[3], wrong2[0], images[3]);
var question5 = new GuessingGame(questions[4], answers[4], correct[4], wrong[4], images[4]);
var question6 = new GuessingGame(questions[5], answers[5], correct[5], wrong[5], wrong2[1], images[5]);

question1.runGame();
question2.runGame();
question3.runGame();
question4.runGame();
question5.runGame();
question6.runGame();
