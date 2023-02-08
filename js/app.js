//Using use strict as directed in Lab
'use strict';

//Prompt user for name and greet user to page
let visitorName = prompt('Hi There! May I have your name please?');
alert(`Hi ${visitorName}! Welcome to the page I created ALL About Me! You are going to be prompted to answer a few questions about me to see what you know. Please answer Yes or No for each question. Let's see what you know or can guess!`);


//Ask the user 5 Yes/No questions with prompt and alert for correct/incorrect answer
let quest1 = prompt('I am from Northeast Ohio, is that considered the Midwest?').toLowerCase();
if (quest1 === 'yes' || quest1 === 'yeah'){
  console.log('Wow, that is CORRECT!');
  alert('Wow! That is CORRECT! You sure know your geography!');
}else {
  console.log('Aww, that is not correct. Let us move on to the next question.');
  alert('Aww, that is not correct. Let us move on to the next question.');
}

let quest2 = prompt('Do I have more than one child?').toLowerCase();
if (quest2 === 'yes' || quest2 === 'yeah'){
  console.log('Aww, that is not correct. Let us move on to the next question.');
  alert('Aww, that is not correct. Let us move on to the next question.');
}else {
  console.log('You got that one! I have a daughter.');
  alert('You got that one right! I have a daughter.');
}

let quest3 = prompt('Was I able to finish my degree while on Active Duty in the Navy?').toLowerCase();
if (quest3 === 'yes' || quest3 === 'yeah'){
  console.log('Well I\'ll be, that is RIGHT!');
  alert('Well I\'ll be, that is RIGHT!');
}else {
  console.log('Hmm, that is not correct. Let us move on to the next question.');
  alert('Hmm, that is not correct. Let us move on to the next question.');
}

let quest4 = prompt('Did I take a Python class as my first coding class?').toLowerCase();
if (quest4 === 'yes' || quest4 === 'yeah'){
  console.log('Aww, that is not correct. I took a C++ class in college.');
  alert('Aww, that is not correct. I took a C++ class in college.');
}else {
  console.log('Correct! I took a C++ class in college.');
  alert('Correct! I took a C++ class in college.');
}

let quest5 = prompt('Do I have any pets?').toLowerCase();
if (quest5 === 'yes' || quest5 === 'yeah'){
  console.log('I do not, cannot, and will not have any pets. They are too messy!');
  alert('I do not, cannot, and will not have any pets. They are too messy!');
}else {
  console.log('You hit the nail on the head! I do not, cannot, and will not have any pets. They are too messy!');
  alert('You hit the nail on the head! I do not, cannot, and will not have any pets. They are too messy!');
}

//Give user final alert with name
alert(`${visitorName}, thank you for taking the time to answer (or guess) questions about me!`);
