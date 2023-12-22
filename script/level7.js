import { startingLevel8 } from "./level8.js";

function walkingToEnd(){
    alert("LEVEL SEVEN: The WIZARD CAME BACK!")
    alert("OMG. Something bad jus happened. The wizard teletransported us!!");
    alert("Oh no its terrible, you have been teletransported to the End BOSSES");
    alert("Now it depends on your lucky to kill the bosses!");
    attacks();
}
function attacks(){
    alert("You have new attacks in your hand, you have a sword, an arch and your power");
    alert("Every enemy in the next three levels have 3 attacks to kill you, but one of your attack is the weaknes of one of his attack!");
    alert("From now, you have to choose, 0 to attack with sword, 1 to attack with your arch and 3 to give the enemy a punch!");
    startingLevel8();
}

export function startingLevel7(){
    walkingToEnd();
}