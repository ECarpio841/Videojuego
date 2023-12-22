//BIENVENIDA E INICIO DEL JUEGO
import { startingLevel1 } from './level1.js';
//Asking for username
export let username = prompt ("WELCOME TO FARLANDS, LET`S CHOOSE AN USERNAME FOR YOU", "username");
if(username == ""){
    username = "Steve"} 
    else if (username  == null){
        username  = "Steve"} else if (username  === "username"){
            username ="Steve"; 
             }
             alert(`Welcome to FarLands ${username}`);

//Say Welcome
function welcome (){
alert("Welcome to this adventure in FARLANDS GAME");
alert("This game is about an adventure in a dangerous Forest");
alert("Your desicions will make you win or lose the game");
}

// Do nothing
function doNotStart () {
    alert("Let me know if you change your desicion");

}

//Start to play desicion
function startingToPlay (){ 
    let readyQuestionToStart = confirm("Are you ready?");
    if(readyQuestionToStart == true) {
        startingLevel1();
            } else {
                doNotStart();
            }
            };

function startMainCode (){
            welcome();
            startingToPlay();
        };
        startMainCode();