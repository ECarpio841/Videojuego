import { gameOver } from "./level1.js";
import { startingLevel4 } from "./level4.js";

function getFoodLevel (){
    alert("LEVEL 3: GETTING FOOD")
    alert("To build your first base you need ENERGY, so we are going to play a game to get some food")
    let getDesicion = confirm("Are you ready?")
    if (getDesicion){
        getFoodAction();
    } else{
        let restartLevel3 = confirm ("Do you want to try again?");
        if (restartLevel3){
startingLevel3();
        } else {
            gameOver();
        }
    }
};
function getFoodAction(){
    alert("To get Food you need to kill some animals");
    alert("But there is just one animal with an important caracteristic")
    alert("Your work will be to guess who is the animal with a riddle")
    alert("So let`s start!!")
    firstRiddleGame();
}
function firstRiddleGame(){
alert("I'm fluffy and white, with wool so neat.");
alert("In fields, I wander on nimble feet.");
alert("I say baa and may have a bell,On the green meadows, where I dwell. What am I?")
alert("What is this animal? A sheep? A cow? A pig?")
alert("To win this game, write S to sheep, C to Cow and P to Pig!")
let firstAnimal = prompt ("What am I?").toLowerCase();

if (firstAnimal === "s"){
    alert("You`re RIGHT!!");
    eatingAction();
} else if (firstAnimal === "c" || firstAnimal === "p"){
    alert("That`s not the answer!");
    alert("You are an baaaastupid!!!")
    alert("Let`s try again!!");
firstRiddleGame();
} else{
    alert("That`s not our option!!")
    alert("Be Intelligent!!")
    firstRiddleGame();
}

function eatingAction(){
    alert("It`s enough for today, tomorrow We will get an armour for you!");
    alert("Congratulation");
    alert("With the wool you can make a bed!!");
    alert("You can advance to LEVEL FOUR!!");
    startingLevel4();

}
}
export function startingLevel3 (){
getFoodLevel();
}
