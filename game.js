var answerOne = "yes";
var answerTwo= "no";
var answerThree = "yes";
var answerFour= "25";
var answerFive= 'yes';
var answerSix='2';


alert("Please answer yes or no. Except for question Four and Six.");

var counter = 0;

var userAnswerOne = prompt("Did I grow up in Minnesota?");

if ((userAnswerOne === answerOne)||(userAnswerOne === 'y')||(userAnswerOne === 'Y')||(userAnswerOne ==='YES')){
  alert("You chose " + userAnswerOne + ", good choice!" );
  alert("That's correct! Have you been following me?");
  counter++;
}
  else{
    alert('You chose ' + userAnswerOne + ', poor decision.');
    alert("That's incorrect. Oh yah, you betcha! I grew up in Minnesota.");
  }

  var userAnswerTwo = prompt("Was I member of the US Olympic Curling team?");

  if ((userAnswerTwo === answerTwo)||(userAnswerTwo === 'n')||(userAnswerTwo === 'N')||(userAnswerTwo === 'NO')){
    alert("You chose " + userAnswerTwo + ", good choice!");
    alert("That's correct, sadly I didn't make the team.");
    counter++;

  }

  else{
    alert('You chose ' + userAnswerTwo + ', poor decision.');
    alert("That's incorrect, and they would've won gold that year with me.");

  }

  var userAnswerThree = prompt('Have I been volcano boarding?');

  if ((userAnswerThree === answerThree)||(userAnswerThree === 'y')||(userAnswerThree === 'Y')||(userAnswerThree === 'YES')){
    alert('You chose ' + userAnswerThree + ', good choice!');
    alert("That's correct! Twice, and the volcano is active!");
    counter++;
  }

  else {
    alert('You chose, ' + userAnswerThree + ', poor decision.');
    alert("That's incorrect. It's like you don't even know me.");
  }

  var userAnswerFour = prompt("How old I am?");
    if(userAnswerFour === answerFour){
      alert('You chose ' + userAnswerFour + ', good choice!');
      alert("That's correct! A quarter of a century, how time flies.");
      counter++;

    }

    else if(userAnswerFour > answerFour){
      alert('You chose ' + userAnswerFour + ', poor decision.');
      alert("That's incorrect. Do you really think I am that old?!!");

    }

    else{
      alert('You chose ' + userAnswerFour + ', poor decision.');
      alert("That's incorrect. I'm flattered, but I'm not that young.");
    }

    var userAnswerFive = prompt('Do I have two dogs?');
      if((userAnswerFive===answerFive)||(userAnswerFive==='y')||(userAnswerFive==='Y')||(userAnswerFive==='YES')){
        alert('You chose ' + userAnswerFive + ', good choice!');
        alert("That's correct! Two big dogs! Boomer and Jax.");
        counter++;
      }
      else{
        alert('You chose ' + userAnswerFive +', poor decision.');
        alert(" That's incorrect. Couldn't live without my best buds!");
      }

    var userAnswerSix = prompt('How many cats do I have?');
      if(userAnswerSix === answerSix){
        alert('You chose ' + userAnswerSix + ', good choice!');
        alert("That's correct! Baggins and Chirp.");
        counter++;
      }
      else if(userAnswerSix > answerSix){
        alert("You chose " + userAnswerSix + ", poor decision.");
        alert("That's incorrect. I'm not a crazy cat person, at least I hope not.");

      }

      else{
        alert('You chose ' + userAnswerSix + ', poor decision.');
        alert("That's incorrect. I've got more than that!");
      }


  alert("You got " + counter +"/6 correct!");

  if (counter >= 4){
    alert("You know me so well, let's be best friends!");
  }

  if (counter <=3){
    alert("It's okay, I probably don't know much about you either");
  }






