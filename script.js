function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result1 = number * 25 + 1100 - 7;
    var result2 = number * 25 + 1093;
    document.getElementById('result').innerHTML = "Result 1: " + result1 + "<br>Result 2: " + result2;
}
