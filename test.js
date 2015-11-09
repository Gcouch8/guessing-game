var button = document.getElementById('start');



start.addEventListener('click', function(event){
    question1.runGame(document.getElementById('aOne'), document.getElementById('img1'));
    // question2.runGame();
    // question3.runGame();
    // question4.runGame();
    // question5.runGame();
    // question6.runGame();
});



var GuessingGame = function(question, answer, results) {
    this.question = question;
    this.answer = answer;
    this.correct = results.correct;
    this.wrong = results.wrong;
    this.image = results.image;
    this.runGame = function(element1, element2) {
        var response = prompt(this.question);
        if (this.answer == 'yes') {
            if (response == this.answer) {
               element1.innerHTML = this.correct;
               var pic = document.createElement('img');
               pic.src = this.image;
               element2.appendChild(pic);
            } else {
                element1.innerHTML = this.wrong;
            }
        }
    }
};

var question1 = new GuessingGame(questions[0], answers[0], {correct: correct[0], wrong: wrong[0], image: images[0]});
var question2 = new GuessingGame(questions[1], answers[1], {correct: correct[1], wrong: wrong[1], image: images[1]});
var question3 = new GuessingGame(questions[2], answers[2], {correct: correct[2], wrong: wrong[2], image: images[2]});
var question4 = new GuessingGame(questions[3], answers[3], {correct: correct[3], wrong: wrong[3], image: images[3]});
var question5 = new GuessingGame(questions[4], answers[4], {correct: correct[4], wrong: wrong[4], image: images[4]});
var question6 = new GuessingGame(questions[5], answers[5], {correct: correct[5], wrong: wrong[5], image: images[5]});




