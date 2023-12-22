import { startingLevel7 } from "./level7.js";

function materialsForBed(){
    alert("LEVEL 6: SLEEPING?")
    alert("You need to make a bed because its getting late");
    alert("It is like a little game about the number of materials that you need");
    alert("Good Luck!!")
    choosingNumMaterial();
}
function choosingNumMaterial (){
    let amount = prompt("The amount of wool that you need for make the bed is the answer of x+3/3 + x/3 - x-1/3 = 2", 0)
    if (amount == 2){
        alert("Yeah, that`s the answer. You will need 2 items of wool");
        alert("Now you can sleep in your new bed!!")
        alert("GOOD JOB, YOU CAN ADVANCE TO LEVEL #7");
        startingLevel7();
    } else {
        alert("That`s not the answer! Try again!");
        choosingNumMaterial();
    }
}
export function startingLevel6 (){
    materialsForBed();
}