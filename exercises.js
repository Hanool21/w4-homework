// DO NOT CHANGE THE NAMES OF THE ANSWER VARIABLES
// Whatever value you enter into your answer variables, you can see on your index site. 
//Save this file, then open up the index.html file and you will be able to see the result of whatever value you gave each answer variable..

//-----------------------------
// #1 The Fortune Teller
//-----------------------------

  // Since this is the first question, we will help you get started with two of the variables. Feel free to change the value to anything you want.
  // You still need to add variables for the day of the week and the restaurant you will be going to.

var numBurgers = 5;
var restaurant = 'In n Out';
var friend = 'Katherine,';
var day = 'Friday';

  // We will also help you with part of the result, so that you know what it sort of looks like. REMEMBER, this is not the complete solution. 
  // This is what the final output should look like: You will be eating _____ burgers at this restaurant: _____ with my friend, _____, on this day: ______

var questionOneAnswer = 'You will be eating ' + numBurgers + ' burgers at this restaurant: ' + restaurant + ' with my friend, ' + friend + ' on this day: ' + day;

function toggle1() {
  document.getElementById('answer1').style.display === 'none' ? document.getElementById('answer1').style.display='' : document.getElementById('answer1').style.display='none';
}


//-----------------------------
// #2 The Age Calculator 
//-----------------------------

  //Forgot how old someone is? Calculate it! 
  //You will have a total of 3 variables: the current year, the birth year, and a calculation based on the 2 years.
  // Calculate their 2 possible ages based on the stored values. 

// Store your answer here
var year = 2018;
var birthyear = 1994;

var questionTwoAnswer = 'They are ' + (year - birthyear) + ' or ' + (year - birthyear - 1);

function toggle2() {
  document.getElementById('answer2').style.display === 'none' ? document.getElementById('answer2').style.display='' : document.getElementById('answer2').style.display='none';
}
//-----------------------------
// #3 The Temperature Converter
//-----------------------------
var celcius = 17;
var farenheit = 62;
var symbol = '\u00B0';
// Celsius to Farenheit Answer
var questionThreeAnswerA = celcius + symbol + ' degrees Celcius is ' + ((celcius*9/5) +32) + symbol + ' degrees Farenheit.';

// Farenheit to Celsius Answer
var questionThreeAnswerB = farenheit + symbol + ' degrees Farenheit is ' + ((farenheit-32)*5/9) + symbol + ' degrees Celcius';

function toggle4a() {
  document.getElementById('answer3a').style.display === 'none' ? document.getElementById('answer3a').style.display='' : document.getElementById('answer3a').style.display='none';
}
function toggle4b(){
  document.getElementById('answer3a').style.display = 'none'
}
function toggle5a() {
  document.getElementById('answer3b').style.display === 'none' ? document.getElementById('answer3b').style.display='' : document.getElementById('answer3b').style.display='none';
}
function toggle5b() {
  document.getElementById('answer3b').style.display = 'none'
}
//-----------------------------
// #4 The Bonus Question
//-----------------------------
var farenheit1 = Math.random()*100;
var questionFourAnswer = farenheit1 + symbol + ' degrees Farenheit is ' + ((farenheit1-32)*5/9) + symbol + ' degrees Celcius';

function toggle3() {
  document.getElementById('answer4').style.display === 'none' ? document.getElementById('answer4').style.display='' : document.getElementById('answer4').style.display='none';
}









//-----------------------------
    //DO NOT EDIT THIS SECTION:
    //This section will populate your HTML file with your answers.
//-----------------------------
window.onload = function () {  

  document.getElementById('answer1').innerHTML = questionOneAnswer;
  document.getElementById('answer2').innerHTML = questionTwoAnswer;
  document.getElementById('answer3a').innerHTML = questionThreeAnswerA;
  document.getElementById('answer3b').innerHTML = questionThreeAnswerB;
  document.getElementById('answer4').innerHTML = questionFourAnswer;

}