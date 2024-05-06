function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result = number * 25 + 1093;
    document.getElementById('result').innerHTML = "The code to put in: " + result;
}

document.addEventListener('mousemove', function(e) {
    var cursorBox = document.getElementById('cursorBox');
    cursorBox.style.left = e.pageX + 'px' + 5; // Set left position of the box
    cursorBox.style.top = e.pageY + 'px' + 5; // Set top position of the box
});
