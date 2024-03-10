function addToDisplay(value) {
    document.forms['clc']['display'].value += value;
}

function clearDisplay() {
    document.forms['clc']['display'].value = '';
}

function calculate() {
    var expression = document.forms['clc']['display'].value;
    var result = eval(expression);
    document.forms['clc']['display'].value = result;
}