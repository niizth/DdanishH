function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    // Show spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Delay calculation to simulate loading
    setTimeout(() => {
        const bmi = weight / (height * height);
        let category = '';

        // Determine category based on BMI value
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Hide spinner
        spinner.style.display = 'none';

        // Display result in modal
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<strong>Your BMI is ${bmi.toFixed(1)}</strong> (${category})<br>`;
        openModal();
    }, 500); // Simulate delay
}

function clearForm() {
    // Clear all input fields
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    // Clear result
    document.getElementById('result').innerHTML = '';
    document.getElementById('spinner').style.display = 'none';
}

// Function to open modal
function openModal() {
    document.getElementById('bmiModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('bmiModal').style.display = 'none';
}
