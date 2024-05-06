function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result2 = number * 25 + 1093;
    document.getElementById('result').innerHTML = "The code to put in: " + result2;
}
