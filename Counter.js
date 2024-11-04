const btnDecrease = document.getElementById("btnDecrease");
const btnReset = document.getElementById("btnReset");
const btnIncrease = document.getElementById("btnIncrease");
const CountLabel = document.getElementById("CountLabel");

let count = 0;

btnIncrease.onclick = function(){
    count = count + 1;
    CountLabel.textContent = count;
}

btnDecrease.onclick = function(){
    count = count - 1;
    CountLabel.textContent = count;
}

btnReset.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}