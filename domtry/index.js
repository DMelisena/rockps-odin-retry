/*
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is text content of div";

container.appendChild(content);
*/

const btn = document.querySelector("#btn");

function alertFunction(){
  alert("you did it")
  console.log("hmm")
}
//METHOD 2
/*
btn.onclick = alertFunction
*/
//METHOD 3
btn.addEventListener("click",function(e){
  console.log(e.target)
  e.target.style.background="blue"
})
//METHOD 2
