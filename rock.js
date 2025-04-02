
 
function getComputerChoice() {
    let compchoice= Math.floor(Math.random()*3);
    if (compchoice==0) return("rock");
    if(compchoice==1) return("paper");
    if(compchoice==2) return("scissors");
    console.log("comp choice is" +compchoice)

}


function getHumanChoice(){
    let humanchoice=prompt("Select Rock, Paper or Scissors:").toLowerCase().trim();
    console.log("Your choice is" +humanchoice);
    return humanchoice;

}


function playround(humanchoice,compchoice){
if ((humanchoice === "rock" && compchoice === "scissors") ||
(humanchoice === "paper" && compchoice === "rock") ||
(humanchoice === "scissors" && compchoice === "paper")) {
return `${humanchoice.charAt(0).toUpperCase() + humanchoice.slice(1)} beats ${compchoice}. You win!`;
}
if ((compchoice === "rock" && humanchoice === "scissors") ||
(compchoice === "paper" && humanchoice === "rock") ||
(compchoice === "scissors" && humanchoice === "paper")) {
return `${compchoice.charAt(0).toUpperCase() + compchoice.slice(1)} beats ${humanchoice}. Computer wins!`;
}
if ((compchoice === "rock" && humanchoice === "rock") ||
(compchoice === "paper" && humanchoice === "paper") ||
(compchoice === "scissors" && humanchoice === "scissors"))
 return("Its a tie.")

}

const humanselection=getHumanChoice();
 const computerselection=getComputerChoice();
 console.log("Computer choice is: " + computerselection);
 console.log(playround(humanselection,computerselection))
