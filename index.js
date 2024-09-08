console.log("test")

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

