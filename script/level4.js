import { startingLevel5 } from "./level5.js";

let secretVisit = function(){
    alert("LEVEL 4: AN ARMOR?");
    alert("You have some things to do in this world");
    alert("One of those things is to make an armour for you!");
    alert("I recomend leather");
    alert("There is one animal that can give you leather!");
    secondRiddle();
}

function secondRiddle(){
    alert("Like the Sheep you have to guess the Riddle!")
    alert("In the fields, I graze and chew.")
    alert("Milked for dairy, that's what I do.");
    alert("I have spots or may be plain,");
    alert("What is this animal? A goat? A cow? A steer?")
    alert("To win this game, write G to Goat , C to Cow and S to Steer!")
    let secondAnimal = prompt ("What am I?").toLowerCase();;

if (secondAnimal === "c"){
    alert("You`re RIGHT!!");
    makeAnArmor();
} else if (secondAnimal==="s" || secondAnimal ===" g"){
    alert("That`s not the answer!");
    alert("Let`s try again!!");
secondRiddle();
} else{
    alert("That`s not our option!!")
    alert("Be Intelligent!!")
    secondRiddle();
} }

function makeAnArmor(){
alert("One cow can help us to make a good armor for you!");
let materialArmor = prompt("Select the material for your armor cobblestone or leather:").toLowerCase();
while (materialArmor !== 'leather') {
  alert("THAT`S NOT THE MATERIAL THAT YOU NEED");
  materialArmor = prompt("Select the material for your armor cobblestone or leather? :").toLowerCase();
};
if (materialArmor){
    alert("That`s the correct answer");
    alert("You can advance to Level FIVE!!")
    startingLevel5();
}
}

 export function startingLevel4(){
    secretVisit();
}