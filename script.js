function calculate() {
    var number = parseInt(document.getElementById('numberInput').value);
    var result = number * 25 + 1093;
    document.getElementById('result').innerHTML = "The code to put in: " + result;
}

document.addEventListener('mousemove', function(e) {
    var cursorBox = document.getElementById('cursorBox');
    cursorBox.style.left = e.pageX + 'px'; // Set left position of the box
    cursorBox.style.top = e.pageY + 'px'; // Set top position of the box

    var cursorBox2 = document.getElementById('cursorBox2');
    cursorBox2.style.left = e.pageX + 'px'; // Set left position of the box
    cursorBox2.style.top = e.pageY + 'px'; // Set top position of the box
});
