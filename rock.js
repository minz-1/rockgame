humanscore=0;
computerscore=0;

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
for(i=0;i<5;i++){
    let humanselection=getHumanChoice();
    let computerselection=getComputerChoice();
    console.log("Computer choice is: " + computerselection);
    console.log(playround(humanselection,computerselection))
    console.log("Your score:"+humanscore)
    console.log("Computer score:"+computerscore)}

if (computerscore>humanscore) {
       console.log("FINAL WINNER:Computer wins. Computer score is"+computerscore);
} else if(humanscore>computerscore) {
    console.log("FINAL WINNER:You win!!Your score is"+humanscore);
} else{
    console.log("Tie")
}
 




function playround(humanchoice,compchoice){
if ((humanchoice === "rock" && compchoice === "scissors") ||
(humanchoice === "paper" && compchoice === "rock") ||
(humanchoice === "scissors" && compchoice === "paper")) {
    humanscore++;
return `${humanchoice.charAt(0).toUpperCase() + humanchoice.slice(1)} beats ${compchoice}. You win!`;
}
if ((compchoice === "rock" && humanchoice === "scissors") ||
(compchoice === "paper" && humanchoice === "rock") ||
(compchoice === "scissors" && humanchoice === "paper")) {
    computerscore++;
return `${compchoice.charAt(0).toUpperCase() + compchoice.slice(1)} beats ${humanchoice}. Computer wins!`;
}
if ((compchoice === "rock" && humanchoice === "rock") ||
(compchoice === "paper" && humanchoice === "paper") ||
(compchoice === "scissors" && humanchoice === "scissors"))
 return("Its a tie.")

}



