let buttons = document.querySelectorAll(".btn")
let displayAns = document.querySelector(".displayAns")
let displayCalc = document.querySelector(".displayCalc")

let str = ""
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "AC") {
            displayAns.innerHTML = "";
            displayCalc.innerHTML = ""
            str = ""
        }
        else if (e.target.innerHTML == "=") {
            displayAns.innerHTML = eval(str);
        }
        else if(e.target.innerHTML == "⌫"){
            str = str.slice(0, -1);
            displayCalc.innerHTML = str
        }
        else {
            str += e.target.innerHTML
            displayCalc.innerHTML = str
        }
    })
})