let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turno = true;
let winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset =() =>{
 turno=true;
  enablebox();
  msgcontainer.classList.add("hide");


} 


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was cliked");
    if (turno) {
      box.innerText = "X";
      turno = false;
    } else {
      box.innerText = "O";
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});
const showWinner=(winner)=>{
  msg.innerText=`congratulations the winner is ${winner} `;
  msg.style.color="#821131";
  msgcontainer.classList.remove("hide");
  boxdisable();

}

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};
const boxdisable =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const enablebox =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
newgame.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);