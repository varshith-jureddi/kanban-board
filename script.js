const cards = document.querySelectorAll(".card")
const sections = document.querySelectorAll(".sec")


for (const card of cards) {
    card.addEventListener("dragstart",dragStart)
    card.addEventListener("dragend",dragEnd)
}

for (const sec of sections) {
    sec.addEventListener("dragover",dragOver)
    sec.addEventListener("dragenter",dragEnter)
    sec.addEventListener("dragleave",dragLeave)
    sec.addEventListener("drop",drop)
} 


function dragStart(e) {
    e.dataTransfer.setData("text/plain",this.id)
    // console.log("Drag Start");
}

function dragEnd(e) {
//   console.log("Drag ended");
}

function dragOver(e) {
  e.preventDefault();
//   console.log("Drag over working");
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add("over");
    // console.log("Drag entwr working");
}

function dragLeave(e) {
    this.classList.remove("over");
    // console.log("Drag leave working");
}

function drop(e) {
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);

    this.appendChild(card);
    this.classList.remove("over");
    // console.log("Drag dropped");
}