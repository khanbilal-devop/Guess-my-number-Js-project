'use strict';

const generateRandomNo = () =>  Math.floor(Math.random() * 20) + 1;

let answer = generateRandomNo();
const bodyStyle = document.body.style;
const checkButton = document.getElementById('check');
const answerElement = document.getElementById('answer');
const messageElement = document.querySelectorAll(".message")[0];
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highscore');

const gameOver = () => {
   bodyStyle.backgroundColor = "#FF0000";
   checkButton.disabled = true
   answerElement.innerHTML = '❌';
   messageElement.innerHTML = "🥲 Game Over!";

}


const checkForNumber = (e) => {
     const enteredNumber = Number(e.target.previousElementSibling.value);
     let score = Number(scoreElement.innerHTML);
     if(enteredNumber){
         if(enteredNumber === answer){
            messageElement.innerHTML = "🎉 Correct Number!";
            answerElement.innerHTML = answer;
            bodyStyle.backgroundColor = "#4BB543";
            let highScore = Number(highScoreElement.innerHTML);
            if(score > highScore || highScore === 0){ 
               highScoreElement.innerHTML = score;
            }
            checkButton.disabled = true
         }else{ 
           messageElement.innerHTML = enteredNumber < answer ? '📉 Too low!' : '📈 Too high!';
           score--;
           scoreElement.innerHTML = score; 
           score === 0 && gameOver();
         }
     }else{
        messageElement.innerHTML = '⛔️ No number!';
     }
}

const resettingGame = () => {
   bodyStyle.backgroundColor = "#222";
   answer = generateRandomNo();
   answerElement.innerHTML = '?';
   checkButton.disabled = false;
   checkButton.previousElementSibling.value = '';
   scoreElement.innerHTML = 20;
}


// Add an event listener for the "click" event
checkButton.addEventListener("click", checkForNumber);
