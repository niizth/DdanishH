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

        // Display result in modal with extra info and image
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <strong>Your BMI is ${bmi.toFixed(1)}</strong> (${category})<br>
            <p>${info}</p>
            ${image}
        `;
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
