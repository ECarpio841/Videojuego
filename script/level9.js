import { startingLevel10 } from "./level10.js";

function dragonBoss(){
    alert("Dragon Boss has three attacks! The number 0 is the fireball that you can strike it back with you arch");
    alert("The attack number 1 are the endermans, mobs that hurt you, you can defeat them with your sword");
    alert("The attack number 2 is the near attack with his tail, one punch can deafeat it!")
    alert("Good Lucky, if you die, you can try it again!")
    fightDragon();
}
function fightDragon(){
    let yourAttack = prompt("What kind of attack are you gonna use?", "0,1 or 2")
    alert (`You have selected attack number ${yourAttack}`)
    if (yourAttack == 0) {
        alert("Your attack is SWORD!");
    } else if (yourAttack == 1){
        alert("Your attack is ARCH!");
    } else if (yourAttack==2){
        alert("You attack is a PUNCH!");
    } else {
        alert("that`s not an attack!! You loose")
        fightWither();
    }

        let dragonAttack =  Math.round(Math.random() * 2);
 if (dragonAttack == 0) {
        alert("His attack is FIREBALLS!");
    } else if (dragonAttack  == 1){
        alert("His attack is a ANGRY TAIL!");
    } else if (dragonAttack ==2){
        alert("His attack is ENDERMANS!");
    } 
    
    if(yourAttack == dragonAttack){
        alert("It is a DRAW!! Try again!");
        fightDragon();
    } else if (yourAttack == 1 && dragonAttack==0){
        alert("YOU HAVE DEFEAT HIM!!");
        levelTen();
    } else if (yourAttack == 0 && dragonAttack== 2){
        alert("YOU HAVE DEFEAT HIM!!");
        levelTen();
    } else if (yourAttack == 2 && dragonAttack== 1){
        alert("YOU HAVE DEFEAT HIM!!");
        levelTen();
    } else{
        alert("You loose, start again!!")
        fightDragon();
    }
}

function levelTen(){
alert("Hi is the second!! We need to get away from this place");
startingLevel10();
}


export function startingLevel9(){
    dragonBoss();
}