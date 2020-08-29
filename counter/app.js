'use strict';

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
let number = document.getElementById('number');

decrease.onclick = function () {
    let numberDecrement = number.innerHTML;
    numberDecrement--;
    number.innerHTML = numberDecrement;
    checkColor();
}

increase.onclick = function () {
    let numberIncrement = number.innerHTML;
    numberIncrement++;
    number.innerHTML = numberIncrement;
    checkColor();
}

reset.onclick = function () {
    number.innerHTML = 0;
    checkColor();
}

const checkColor = () => {
    if (number.innerHTML < 0) {
        number.style.color = '#ff0000';
    } else if (number.innerHTML > 0) {
        number.style.color = '#008000';
    } else {
        number.style.color = '#000000';
    }
}

