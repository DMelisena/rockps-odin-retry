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

let humanNumber = ""
var h=""
function getHumanChoice(){
  humanNumber=window.prompt("Choose scissor, paper or scissor")
  if(humanNumber=="scissor"||humanNumber==2){
    h="s"
    console.log("You chose scissor")
  }
  else if(humanNumber=="rock"||humanNumber==0){
    h="r"
    console.log("You chose rock")
}
  else {
    h="p"
    console.log("You chose paper")
  }
    return h
}

//game func{{{
var humanScore=0
var compScore=0

//call the necessary DOMS
const humanScoreDOM =document.querySelector(".humanScore")//to modify scores
const compScoreDOM =document.querySelector(".compScore")

const commentary =document.querySelector(".history")
console.log(commentary)

function playGame(player,opponent){
  console.log(player,opponent)
  var compAns=opponent
  
  if (player==opponent){
   var answer = "It's a draw"
  }
  else if(player=="r"&&opponent=="s"||player=="s"&&opponent=="p"||player=="p"&&opponent=="r"){
    humanScore++
    var answer = "You won"
  }
  else{
    compScore++
    var answer = "You lose"
  }
  console.log("the score is",humanScore,"-",compScore)
  return answer
}

//playGame(getHumanChoice(),getComputerChoice())
//}}}

//call the necessary DOMS
const humanScoreDOM =document.getElementById("humanScore")//to modify scores
const compScoreDOM =document.getElementById("compScore")

const rockButton =document.getElementById("rockDOM")//to initiate a game
const paperButton =document.getElementById("paperDOM")
const scissorButton =document.getElementById("scissorDOM")

const commentary =document.getElementById("history")
