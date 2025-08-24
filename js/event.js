//option 2 event handle event
function makeRed() {
  document.body.style.background = "red";
}

function makeYello() {
  document.body.style.backgroundColor = "yellow";
}
// option 3: get Element by Id and then set onlick
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 3
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = MakePurple;
function MakePurple() {
  document.body.style.backgroundColor = "purple";
}
