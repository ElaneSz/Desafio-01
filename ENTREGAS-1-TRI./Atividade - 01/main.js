const domMain = document.querySelector("header")
const domDivNum = domMain.querySelector("div:last-child")
let counter = 0
domMain.addEventListener("click", () => {
    counter++
    domDivNum.innerHTML = counter
})
