function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result = number * 25 + 1093;
    document.getElementById('result').innerHTML = "The code to put in: " + result;
}
