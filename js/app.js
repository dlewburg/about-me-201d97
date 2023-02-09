//Using use strict as directed in Lab
'use strict';

function greeting(){
  //Prompt user for name and greet user to page
  let visitorName = prompt('Hi There! May I have your name please?');
  alert(`Hi ${visitorName}! Welcome to the page I created ALL About Me! You are going to be prompted to answer a few questions about me to see what you know. Please answer Yes or No for each question. Let's see what you know or can guess!`);
}
greeting();

//Creating a Score Counter
let scoreCount = 0;

//Ask the user 5 Yes/No questions with prompt and alert for correct/incorrect answer; wrapped each question in a function

function question1(){
  let quest1 = prompt('I am from Northeast Ohio, is that considered the Midwest?').toLowerCase();
  if (quest1 === 'yes' || quest1 === 'yeah'){
    //console.log('Wow, that is CORRECT!');
    alert('Wow! That is CORRECT! You sure know your geography!');
    scoreCount++;
  }else {
    //console.log('Aww, that is not correct. Let us move on to the next question.');
    alert('Aww, that is not correct. Let us move on to the next question.');
  }
}
question1();

function question2(){
  let quest2 = prompt('Do I have more than one child?').toLowerCase();
  if (quest2 === 'yes' || quest2 === 'yeah'){
  //console.log('Aww, that is not correct. Let us move on to the next question.');
    alert('Aww, that is not correct. Let us move on to the next question.');
  }else {
  //console.log('You got that one! I have a daughter.');
    alert('You got that one right! I have a daughter.');
    scoreCount++;
  }
}
question2();

function question3(){
  let quest3 = prompt('Was I able to finish my degree while on Active Duty in the Navy?').toLowerCase();
  if (quest3 === 'yes' || quest3 === 'yeah'){
    //console.log('Well I\'ll be, that is RIGHT!');
    alert('Well I\'ll be, that is RIGHT!');
    scoreCount++;
  }else {
    //console.log('Hmm, that is not correct. Let us move on to the next question.');
    alert('Hmm, that is not correct. Let us move on to the next question.');
  }
}
question3();

function question4(){
  let quest4 = prompt('Did I take a Python class as my first coding class?').toLowerCase();
  if (quest4 === 'yes' || quest4 === 'yeah'){
    //console.log('Aww, that is not correct. I took a C++ class in college.');
    alert('Aww, that is not correct. I took a C++ class in college.');
  }else {
  //console.log('Correct! I took a C++ class in college.');
    alert('Correct! I took a C++ class in college.');
    scoreCount++;
  }
}
question4();

function question5(){
  let quest5 = prompt('Do I have any pets?').toLowerCase();
  if (quest5 === 'yes' || quest5 === 'yeah'){
    //console.log('I do not, cannot, and will not have any pets. They are too messy!');
    alert('I do not, cannot, and will not have any pets. They are too messy!');
  }else {
  //console.log('You hit the nail on the head! I do not, cannot, and will not have any pets. They are too messy!');
    alert('You hit the nail on the head! I do not, cannot, and will not have any pets. They are too messy!');
    scoreCount++;
  }
}
question5();

function question6(){
//Adding guess myNumber question with a limit of 4 Guesses
  let myNumber = 7;
  let numOfGuess = 0;

  let visitorNumber = prompt('Can you guess the number I chose? Pick a number 1 through 10');

  while(+visitorNumber !== myNumber && numOfGuess < 3){
    if(visitorNumber < myNumber){
      alert('Oh No! That guess is TOO LOW!');
      visitorNumber = prompt(`${visitorName} please guess again!`);
    }else if (visitorNumber > myNumber) {
      alert('Oh my! That guess is TOO HIGH!');
      visitorNumber = prompt(`${visitorName} please guess again!`);
    }else if (visitorNumber === myNumber){
      alert(`Wow! ${visitorName}, you got it Correct!`);
      scoreCount++;
    }
    numOfGuess++;
  }
  if(numOfGuess === 4){
    alert('Oh no! You are out of guesses. The correct number is 7! Let us move on.');
  }
}
question6();

function question7(){
//user guesses one element in an array within 6 tries

  let steak = ['wagyu','filet mignon','ribeye','t-bone','kobe'];

  let numSteakGuess = 6;


  while (numSteakGuess !== 0){
    let steakGuess = prompt ('Guess an expensive cut of steak').toLowerCase();
    let correctGuess = false;
    for(let i=0; i < steak.length; i++){
      if(steakGuess === steak[i]){
        alert(`Yay ${visitorName}! You know your steaks!`);
        scoreCount++;
        correctGuess = true;
        break;
      }
    }

    if (correctGuess){
      alert(`${visitorName}, ${steak} were all correct answers!`);
      break;
    }else if (numSteakGuess === 0) {
      alert(`${visitorName}, ${steak} were all correct answers!`);
    }
    else{
      alert(`${visitorName},that is not an expensive cut. Please try again.`);
    }
    numSteakGuess--;
  }
}
question7();

//Give user final alert with name and number of correct answers
alert(`${visitorName}, thank you for taking the time to answer (or guess) questions about me! You got ${scoreCount} Correct! Nice Job!`);
