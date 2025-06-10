let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.innerText = count
}

function save() {
    let countStr = count + ' - '
    saveEl.textContent += countStr
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}