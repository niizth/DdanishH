function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);

     // Check if the height or weight is invalid or 0, and show specific messages
     if (isNaN(height) || height === 0) {
        if (isNaN(weight) || weight === 0) {
            alert('Please enter valid numbers greater than 0 for both height and weight.');
        } else {
            alert('Please enter a valid number greater than 0 for height.');
        }
        return;
    }

    if (isNaN(weight) || weight === 0) {
        alert('Please enter a valid number greater than 0 for weight.');
        return;
    }

    // Show spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Delay calculation to simulate loading
    setTimeout(() => {
        const bmi = weight / (height * height);
        let category = '';
        let info = '';
        let image = '';

        // Determine category based on BMI value and corresponding information
        if (bmi < 18.5) {
            category = 'Underweight';
            info = 'Being underweight can lead to a weakened immune system, fragile bones, and feeling tired. Consult a healthcare provider to ensure you are getting proper nutrition.';
            image = '<img src="underweight.png" alt="Underweight advice" style="width:100%">';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            info = 'You have a healthy weight for your height. Keep maintaining a balanced diet and regular physical activity.';
            image = '<img src="normalweight.png" alt="Healthy weight advice" style="width:100%">';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            info = 'Being overweight increases the risk of cardiovascular diseases and other health issues. Consider a healthy diet and regular exercise.';
            image = '<img src="overweight.png" alt="Overweight advice" style="width:100%">';
        } else {
            category = 'Obesity';
            info = 'Obesity can lead to severe health issues like heart disease, diabetes, and hypertension. Please consult with a healthcare provider for guidance on a weight management plan.';
            image = '<img src="obesity.png" alt="Obesity advice" style="width:100%">';
        }

        // Hide spinner
        spinner.style.display = 'none';

        // Display result directly on the page
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            ${image}
            <strong>Your BMI is ${bmi.toFixed(1)}</strong><br>
            <p>${info}</p>
        `;
    }, 500); // Simulate delay
}

function clearForm() {
    // Clear height and weight input fields
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    // Clear only the output result, not the placeholder text
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<strong>Your BMI result will be displayed here.</strong>';

    // Optionally hide the spinner if it's visible
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}
