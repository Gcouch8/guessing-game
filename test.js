var GuessingGame = function() {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
    this.wrong = wrong;
    this.image = image;
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

        if (this.answer == 'yes') {
            if (this.answer == x){
                this.renderCorrect();
            } else {
                this.renderWrong();
            }
        } else if (typeof(this.answer) == 'number') {
            if (x < this.answer) {
                y = crea
            }
        }
    }
};

var question1 = new GuessingGame(questions[0], answers[0], correct[0], wrong[0] images[0]);



question1.runGame()
