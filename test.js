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

// question1.runGame();
