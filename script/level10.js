import { gameOver } from "./level1.js";

function endGame (){
    alert("We need to scape, this place is breaking the End World");
    alert("To scape from here we need to collect some Ender Eyes for the portal");
    alert("There is the Wizard, he will help to get that. We defeat him!!")
    GetEnderPearls();

}
function GetEnderPearls () {
alert("WIZARD: There is something bad, you are my worst enemy");
alert("WIZARD: My last trick is this. To get enderpearls, let`s play a Riddle AGAIN!!");
lastRiddle();
}
function lastRiddle (){
alert("In Minecraft's world, a treat is baked");
alert ("Layers of sweetness, a delight to make");
alert("With wheat and sugar, eggs in the mix");
let riddleOfCake = prompt("A tasty dessert, what is this?");
if (riddleOfCake == "CAKE"){
    alert("Wizard: Thats the answer, its over. Take some of my last Enderpearls! You should scape!")
    alert("YOU HAVE DEFEATED, THIS WORLD NOW IS YOURS!!")
    alert("One day, someone will fall in this place again, it is your duty to guide him to the victory, now you can stay in peace!");
    alert("Thanks for playing!!");
} else {
    alert("That is not the correct answer, Time is out!")
    gameOver();
}
}
export function startingLevel10(){
    endGame();
}