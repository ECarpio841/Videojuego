import { gameOver } from "./level1.js";
import { startingLevel6 } from "./level6.js";


function chest(){
    alert("LEVEL 5: BETTER ARMOUR??")
    alert("Well you have some of all, so you just need to walk to your zone to start working!")
    alert("Can you see that? A little zombie has left a cheast there and He is gone!!")
    searchingInCheast();
}
function searchingInCheast(){
    let seraching= confirm("Do you want to search something in that chest?")
    if (seraching){
        alert("Well we have to be careful with that!!");
        alert("LOOK AT YOUR LUCKY!! YOU JUST FOUND A SWORD, ARCH AND ENCHANTMENT BOOK TO IMPROVE YOUR ARMOR!!");
        makeBetterArmor();
    } else { 
        alert("It`s ok. We can still walking");
        alert("We have walked around 1 kilometer in blocks!")
        alert("What is that?");
        alert("OMG a CREEPER!!! You Need to Run!!");
        alert("There is no scap---");
        gameOver();

    
    }
}
function makeBetterArmor(){
    let betterArmor = prompt("¿Do you want to Upgrade your armor?" ,"S/N").toLowerCase();
if (betterArmor ==="s"){
    let upgradeLevel = betterArmor ? parseInt(prompt("Select the level of upgrade: ")) ?? 1 : 1;
    let finalArmor = upgradeLevel * 5 ?? 5;
    alert(`¡You have upgraded your armor ${upgradeLevel}! Your upgradeLevel is: ${finalArmor}`);
    alert("You can advance to Level 6!!")
    startingLevel6();

} else if  (betterArmor === 'n'){
    alert("It`s ok. We can still walking");
        alert("We have walked around 1 kilometer in blocks!")
        alert("What is that?");
        alert("OMG a CREEPER!!! You Need to Run!!");
        alert("There is no scap---");
        gameOver();
} else {
    alert("That is not an aswer")
    makeBetterArmor();
}

}

export function startingLevel5(){
    chest();
}