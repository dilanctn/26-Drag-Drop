const empties = document.querySelectorAll(".empty")
const fill = document.querySelector(".fill")

fill.addEventListener("dragstart", dragStart)

function dragStart() {
    this.className += " hold"
    setTimeout(() => (this.className = "invisible"), 0);
}

fill.addEventListener("dragend", dragEnd)

function dragEnd() {
    this.className = " fill"
}

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("drop", dragDrop)
}

function dragOver(e) {
    //console.log("dragOver")
    e.preventDefault()
}

function dragLeave() {
    //console.log("dragLeave")
    this.className += "empty"
}

function dragEnter(e) {
    //console.log("dragEnter")
    e.preventDefault()
    this.className += " hover"
}

function dragDrop() {
    //console.log("dragdrop")
    this.className = "empty"
    this.append(fill)
}