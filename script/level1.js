import { startingLevel2 } from "./level2.js";
import { username } from "./main.js";
//Game Over
 export function gameOver(){
    alert("GAME OVER");
    let askingToContinue = confirm("Do you want to start again?");
    if (askingToContinue) {startingLevel1();} else{
        alert("Thanks for playing");
    }
}
//Starting Game
function startingGame(){
    alert("LEVEL ONE : Your new World")
    alert("Hello, I have never seen you around here before, are you ok?")
    alert("I can see that you are lost");
    alert ("You`ll need some help, so first of all let me know one more thing")
    alert("Ok I HAVE IT! I can know all about you now. Welcome to my world!")
    alert("By the way, very good name " + username)};

    //Asking to star adventure
    function askingToAdventure(){
    let startgamedesicion = confirm ("Do you want to start this adventure?");
     if (startgamedesicion == true){
        alert("Good desicion, so we need to start finding some materials for construction");
    } else {
    gameOver();}}
//Second step
    function findingMaterials() {
        alert("YOUR FIRST STEP IS FIND SOME MATERIALS TO BUILD YOUR BASE AND KEEP YOU SAVE");
        alert("So, let`s do it");
        alert ("You have walked around one kilometer in blocks, we have arrived to a forgotten town, in this little town are some left behind tools");
        alert ("Choose one of them");
        alert ("There are a pickaxe, a shovel and a sword. To collect some cobble stone, what would you choose?");
    }
    
    function badSelectionOfTools (){
        alert("No, that`s not the correct option, try again!")
        choosingTools();
    }

    function choosingTools () {
        let tools = prompt ("Write number 1 to choose the pickaxe, number 2 to choose the shovel and number 3 to choose the sword");
        switch (Number(tools)){
            case 1:  alert ("Good desicion, you have selected the Pickaxe") 
            correctTool();
            amountOfCobbleStone();
            break;
            case 2: badSelectionOfTools();
            case 3: badSelectionOfTools();
            default: badSelectionOfTools(); 
         } };

         function correctTool(){
            alert("The pickaxe will make some incredible things, like to collect cobble stone, so you will collect some of it");
            alert("The value of cobble stone depends of the size that you need to build your first base");
            alert("IN MY EXPERIENCE, like a god in this place, I recomend a big amount of cobble stone");
         }

         function badAnswer(){
            alert("No, that`s not the correct answer, try again!")
            amountOfCobbleStone();
        }

         function amountOfCobbleStone(){
            let amount = prompt("The amount of the cobble stone that you need in stacks of 64 items per stack is the result of this ecuation: 4x + 3 = 21 - 2x", 0)
            if (amount == 3){
                alert("Yeah, that`s the answer. You will need 3 stacks of cobblestone");
                alert("GOOD JOB, YOU CAN ADVANCE TO LEVEL #2");
                startingLevel2();
            } else {
                badAnswer();
            }
         }

    export function startingLevel1(){
startingGame();
askingToAdventure();
findingMaterials();
choosingTools ();
};



