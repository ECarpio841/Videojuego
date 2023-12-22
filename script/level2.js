import { gameOver } from "./level1.js";
import { startingLevel3 } from "./level3.js";
import { username } from "./main.js"

//Level2
function problemsWithMagic() {
    alert("LEVEL TWO: IS THIS AN ENCHANTMENT?!")
    alert("Oh no!, its seems like if someone wanna hurt you");
    alert(`Wizard: HI LITTLE ${username} I wanna make you a magic trick`);
    alert("Wizard: I made you fall in an enchantment");
    alert("Wizard: You need to scape with the correct answer of one question");
    alert("Wizard: You just have 5 attemps");
    alert("Wizard: If you lose, its over, i will kill you!");
}
function mathGame() {
    alert("¡Welcome to Math Enchantment!");

    const attemps = 5;
    let goodAnswer = 0;

    let firtsNumber = Math.floor(Math.random() * 10) + 1;
    let SecondNumber = Math.floor(Math.random() * 10) + 1;

    goodAnswer = firtsNumber ** SecondNumber;

    for (let attemp = 1; attemp <= attemps; attemp++) {

      let userAnswer = parseInt(prompt("Attemp #" +  attemp + ": ¿How much is " + firtsNumber + " to the (**) " + SecondNumber + "?"));


      if (!isNaN(userAnswer) && userAnswer == goodAnswer ) {
        alert("Wizard:DAMN! YOU DESTROYED MI ENCHANTMENT!!!");
        alert("YOU CAN ADVANCE TO LEVEL THREE!!");
        startingLevel3();
        break;
        
      }  else if (attemp === attemps){ 
        alert("Wizard: I TOLD YOU")
        gameOver();
      }else {
        alert("MISTAKE. Attemp #" + attemp + " of " + attemps+ ". ¡TRY AGAIN!");
      }
    }
  }
export function startingLevel2(){
problemsWithMagic();
mathGame();
}