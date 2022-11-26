let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0


function increment() {

  count = count + 1 
  countEl.textContent = count
  
}

function save() {
  let lapresult = countEl.textContent + " - "
  saveEl.textContent += lapresult
  countEl.textContent = 0
  count = 0

  // console.log(count)
}
