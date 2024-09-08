console.log("test")

//comp func{{{
function getComputerChoice(){
  let enemyNumber = Math.floor(Math.random()*3)
  let e = ""
  switch (enemyNumber){
    case 0: e="r";console.log("The Opponent use rock"); break;
    case 1: e="p";console.log("The Opponent use paper");break;
    case 2: e="s";console.log("The Opponent use scissor");break}
  let enemyAttack = 1
  return e
}
console.log(getComputerChoice())
///}}}

//human func{{{
let humanNumber = ""
var h=""
function getHumanChoice(){
  humanNumber=window.prompt("Choose scissor, paper or scissor")
  if(humanNumber=="scissor"||humanNumber==2){
    h="s"
    console.log("You chose scissor")
    return h
  }
  else if(humanNumber=="rock"||humanNumber==0){
    h="r"
    console.log("You chose rock")
    return h
}
  else {
    h="p"
    console.log("You chose paper")
    return h
  }
}
//}}}

console.log(getHumanChoice())
