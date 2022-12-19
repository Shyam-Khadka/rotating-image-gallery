let number = document.getElementById("number");
let increase = document.getElementById("add");
let decrease = document.getElementById("subs");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  number.innerText = count;
  green();
  white();
});

decrease.addEventListener("click", () => {
  count--;
  number.innerText = count;
  red();
  white();
});

function green() {
  if (number.innerText > 0) {
    number.style.color = "green";
  }
}
function red() {
  if (number.innerText < 0) {
    number.style.color = "red";
  }
}

function white() {
  if (number.innerText == 0) {
    number.style.color = "white";
  }
}

let generate = document.getElementById("generate");
let numberdisplayer = document.getElementById("numberdisplayer");
generate.addEventListener("click", () => {
  let randomnumber = Math.floor(Math.random() * 1000);
  numberdisplayer.innerText = randomnumber;
});


