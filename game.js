var answerOne = "yes";
var answerTwo= "no";
var answerThree = "yes";
var answerFour= 25;
var answerFive= 'yes';
var answerSix=2;

//A counter variable to keep track of the number of correct questions
var counter = 0;


//Somehow this is working. I don't know how.
var button = document.getElementById('start');

start.addEventListener('click', function(event){
  questions();
});



//The questions!!
function questions(){

  console.log('This is the beginning of the function');
  var userAnswerOne = prompt("Did I grow up in Minnesota?");
  if ((userAnswerOne === answerOne)||(userAnswerOne === 'y')||(userAnswerOne === 'Y')||(userAnswerOne ==='YES')||(userAnswerOne==='Yes')){
  document.getElementById('imageOne').src ='http://www.findlocalbanks.com/images/states/minnesota.gif';
  document.getElementById('aOne').innerHTML = ("You chose " + userAnswerOne + ", good choice!" );
  document.getElementById('rOne').innerHTML = ("That's correct! Have you been following me?");
  counter++;
}
  else{
    document.getElementById('aOne').innerHTML = ('You chose ' + userAnswerOne + ', poor decision.');
    document.getElementById('rOne').innerHTML = ("That's incorrect. Oh yah, you betcha! I grew up in Minnesota.");
  }

  var userAnswerTwo = prompt("Was I a member of the US Olympic Curling team?");
  if ((userAnswerTwo === answerTwo)||(userAnswerTwo === 'n')||(userAnswerTwo === 'N')||(userAnswerTwo === 'NO')){
    document.getElementById('imageTwo').src='http://i.huffpost.com/gen/1621418/images/n-JEREMY-ABBOTT-large570.jpg';
    document.getElementById('aTwo').innerHTML = ("You chose " + userAnswerTwo + ", good choice!");
    document.getElementById('rTwo').innerHTML = ("That's correct, sadly I didn't make the team.");
    counter++;
  }

  else{
    document.getElementById('aTwo').innerHTML=('You chose ' + userAnswerTwo + ', poor decision.');
    document.getElementById('rTwo').innerHTML=("That's incorrect, and they would've won gold that year with me.");
  }

  var userAnswerThree = prompt('Have I been volcano boarding?');
  if ((userAnswerThree === answerThree)||(userAnswerThree === 'y')||(userAnswerThree === 'Y')||(userAnswerThree === 'YES')){
    document.getElementById('imageThree').src='http://www.gsu.edu/wp-content/uploads/2013/11/Volcano-erupting-600x300.jpg';
    document.getElementById('aThree').innerHTML=('You chose ' + userAnswerThree + ', good choice!');
    document.getElementById('rThree').innerHTML=("That's correct! Twice, and the volcano is active!");
    counter++;
  }
  else {
    document.getElementById('aThree').innerHTML=('You chose, ' + userAnswerThree + ', poor decision.');
    document.getElementById('rThree').innerHTML=("That's incorrect. It's like you don't even know me.");
  }

  var userAnswerFour = Number(prompt("How old am I?"));
    if(userAnswerFour === answerFour){
      document.getElementById('imageFour').src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/happy-25th.jpg';
      document.getElementById('aFour').innerHTML=('You chose ' + userAnswerFour + ', good choice!');
      document.getElementById('rFour').innerHTML=("That's correct! A quarter of a century, how time flies.");
      counter++;
    }
    else if(userAnswerFour > answerFour){
      document.getElementById('aFour').innerHTML=('You chose ' + userAnswerFour + ', poor decision.');
      document.getElementById('rFour').innerHTML=("That's incorrect. Do you really think I am that old?!!");
    }
    else{
      document.getElementById('aFour').innerHTML=('You chose ' + userAnswerFour + ', poor decision.');
      document.getElementById('rFour').innerHTML=("That's incorrect. I'm flattered, but I'm not that young.");
    }

    var userAnswerFive = prompt('Do I have two dogs?');
      if((userAnswerFive===answerFive)||(userAnswerFive==='y')||(userAnswerFive==='Y')||(userAnswerFive==='YES')){
        document.getElementById('imageFive').src='http://labsarefamily.com/wp-content/uploads/2015/07/lab5.jpg';
        document.getElementById('aFive').innerHTML=('You chose ' + userAnswerFive + ', good choice!');
        document.getElementById('rFive').innerHTML=("That's correct! Two big dogs! Boomer and Jax.");
        counter++;
      }
      else{
        document.getElementById('aFive').innerHTML=('You chose ' + userAnswerFive +', poor decision.');
        document.getElementById('rFive').innerHTML=("That's incorrect. Couldn't live without my best buds!");
      }

    var userAnswerSix = Number(prompt('How many cats do I have?'));
      if(userAnswerSix === answerSix){
        document.getElementById('aSix').innerHTML=('You chose ' + userAnswerSix + ', good choice!');
        document.getElementById('rSix').innerHTML=("That's correct! Baggins and Chirp.");
        document.getElementById('imageSix').src='http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/700salvador_dali_nywts.jpg';
        counter++;
      }
      else if(userAnswerSix > answerSix){
        document.getElementById('aSix').innerHTML=("You chose " + userAnswerSix + ", poor decision.");
        document.getElementById('rSix').innerHTML=("That's incorrect. I'm not a crazy cat person, at least I hope not.");
      }
      else{
        document.getElementById('aSix').innerHTML=('You chose ' + userAnswerSix + ', poor decision.');
        document.getElementById('rSix').innerHTML=("That's incorrect. I've got more than that!");
      }

//An alert to let the user know the number of correct questions
  alert("You got " + counter +"/6 correct!");

//A bonus message dependent on the number of correct questions
  if (counter >= 4){
    alert("You know me so well, let's be best friends!");
  }
  if (counter <=3){
    alert("It's okay, I probably don't know much about you either");
  }
};









