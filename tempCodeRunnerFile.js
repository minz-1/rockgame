console.log("JJ")
function getComputerChoice() {
    let num= Math.floor(Math.random()*3)
    if (num==0) return("Rock")
    if(num==1) return("Paper")
    if(num==2) return("Scissors")
}
console.log(getComputerChoice());

function getHumanChoice(){
    let choice=prompt("Select Rock, Paper or Scissors:")
    console.log("Your Choice is"+choice)

}
