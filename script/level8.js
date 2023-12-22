import {startingLevel9} from "./level9.js";

function witherBOSS(){
    alert("Wither Boss has three attacks! The number 0 is the explosive that you can strike it back with you arch");
    alert("The attack number 1 is the little wither squeletons that you can defeat them with your sword");
    alert("The attack number 2 is the near attack with his head, one punch can deafeat it!")
    alert("Good Lucky, if you die, you can try it again!")
    fightWither();
}
function fightWither(){
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

        let witherAttack =  Math.round(Math.random () * 2)
 if (witherAttack == 0) {
        alert("His attack is EXPLOSIVES!");
    } else if (witherAttack  == 1){
        alert("His attack is a FACE DEAD!");
    } else if (witherAttack ==2){
        alert("His attack is WITHER SQUELETONS!");
    } 
    
    if(yourAttack == witherAttack){
        alert("It is a DRAW!! Try again!");
        fightWither();
    } else if (yourAttack == 1 && witherAttack==0){
        alert("YOU HAVE DEFEAT HIM!!");
        levelNine();
    } else if (yourAttack == 0 && witherAttack == 2){
        alert("YOU HAVE DEFEAT HIM!!");
        levelNine();
    } else if (yourAttack == 2 && witherAttack == 1){
        alert("YOU HAVE DEFEAT HIM!!");
        levelNine();
    } else{
        alert("You loose, start again!!")
        fightWither();
    }
}

function levelNine(){
alert("Hi is the first! We need to defeat more enemies!");
startingLevel9();
}


export function startingLevel8(){
    witherBOSS();
}