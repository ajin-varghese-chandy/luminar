
function displayNumber(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = ""
}

function evaluateexp() {
    display.value = eval(display.value)
}

function removelastitem() {
    display.value = display.value.slice(0,-1)


}

