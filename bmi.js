function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    var heightInMeters = height / 100; // Convert height to meters
    var bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById("result").textContent = "Your BMI is: " + bmi.toFixed(2);
}

document.getElementById("calculateButton").addEventListener("click", calculateBMI);
