let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
const winPatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let reset = () => {
  let turnO = true;
  enablebtn();
  msgcontainer.classList.add("hide");
  count = 0;
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "x";
      btn.style.color = "blue";
      turnO = true;
    }
    btn.disabled = true;
    count++;
    let winner = checkWinner();

    if (count === 9 && !winner) {
      showDraw();
    }
  });
});

const showDraw = () => {
  msg.innerText = "Game Draw";
  msgcontainer.classList.remove("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation,winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const enablebtn = () => {
  for (box of btns) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (patten of winPatten) {
    val1 = btns[patten[0]].innerText;
    val2 = btns[patten[1]].innerText;
    val3 = btns[patten[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        for (box of btns) {
          box.disabled = true;
        }
        showWinner(val1);
      }
    }
  }
};

resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);
