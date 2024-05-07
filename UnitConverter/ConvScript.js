function convertUnits() {
    // get the inputs from user
    var inputValue = parseFloat(document.getElementById("inputValue").value);

    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // make da conversion
    var outputValue;
    switch (selectedUnit) {
        case "mm":
            outputValue = inputValue;
            break;
        case "cm":
            outputValue = inputValue * 10;
            break;
        case "m":
            outputValue = inputValue * 1000;
            break;
        case "km":
            outputValue = inputValue * 1000000;
            break;
        default:
            outputValue = "Invalid unit";
    }

    // show that
    document.getElementById("output").textContent = "Converted value: " + outputValue + " " + selectedUnit;
}
