function convertUnits() {
    // Get input value and units
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    // Perform conversion
    var outputValue;
    switch (inputUnit) {
        case "mm":
            outputValue = convertFromMillimeters(inputValue, outputUnit);
            break;
        case "cm":
            outputValue = convertFromCentimeters(inputValue, outputUnit);
            break;
        case "m":
            outputValue = convertFromMeters(inputValue, outputUnit);
            break;
        case "km":
            outputValue = convertFromKilometers(inputValue, outputUnit);
            break;
        default:
            outputValue = "Invalid unit";
    }

    // Display converted value
    document.getElementById("output").textContent = "Converted value: " + outputValue + " " + outputUnit;
}

function convertFromMillimeters(value, outputUnit) {
    switch (outputUnit) {
        case "mm":
            return value;
        case "cm":
            return value / 10;
        case "m":
            return value / 1000;
        case "km":
            return value / 1000000;
        default:
            return "Invalid unit";
    }
}

function convertFromCentimeters(value, outputUnit) {
    switch (outputUnit) {
        case "mm":
            return value * 10;
        case "cm":
            return value;
        case "m":
            return value / 100;
        case "km":
            return value / 100000;
        default:
            return "Invalid unit";
    }
}

function convertFromMeters(value, outputUnit) {
    switch (outputUnit) {
        case "mm":
            return value * 1000;
        case "cm":
            return value * 100;
        case "m":
            return value;
        case "km":
            return value / 1000;
        default:
            return "Invalid unit";
    }
}

function convertFromKilometers(value, outputUnit) {
    switch (outputUnit) {
        case "mm":
            return value * 1000000;
        case "cm":
            return value * 100000;
        case "m":
            return value * 1000;
        case "km":
            return value;
        default:
            return "Invalid unit";
    }
}
