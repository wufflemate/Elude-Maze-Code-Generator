function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result = number * 25 + 1093;
    document.getElementById('result').innerHTML = "The code to put in: " + result;
}

function generateTable() {
    var number = parseInt(document.getElementById('numberInput').value);
    var table = document.getElementById('randomTable');
    table.innerHTML = '<tr><th>Index</th><th>Random Number</th></tr>'; // Clear existing table content
    for (var i = 1; i <= number; i++) {
        var randomNum = Math.floor(Math.random() * number) + 1;
        var row = '<tr><td>' + i + '</td><td>' + randomNum + '</td></tr>';
        table.innerHTML += row; // Append new row to the table
    }
}
