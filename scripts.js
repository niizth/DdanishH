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
        let imageSrc = '';
        let categoryInfo = '';

        // Determine category based on BMI value
        if (bmi < 18.5) {
            category = 'Underweight';
            imageSrc = 'underweight.png';
            categoryInfo = 'You are underweight. Consider a balanced diet to gain weight healthily.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            imageSrc = 'normalweight.png';
            categoryInfo = 'You have a normal weight. Maintain a healthy diet and regular exercise.';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            imageSrc = 'overweight.png';
            categoryInfo = 'You are overweight. Consider adjusting your diet and increasing physical activity.';
        } else {
            category = 'Obesity';
            imageSrc = 'obesity.png';
            categoryInfo = 'You are obese. It’s recommended to consult with a healthcare provider for advice.';
        }

        // Hide spinner
        spinner.style.display = 'none';

        // Display result in modal
        const bmiInfoDiv = document.getElementById('bmi-info');
        const bmiImage = document.getElementById('bmi-image');
        bmiInfoDiv.innerHTML = `<strong>Your BMI is ${bmi.toFixed(1)}</strong> (${category})<br><p>${categoryInfo}</p>`;
        bmiImage.src = imageSrc;
        openModal();
    }, 500); // Simulate delay
}

function clearForm() {
    // Clear all input fields
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    // Clear result
    document.getElementById('bmi-info').innerHTML = '';
    document.getElementById('bmi-image').src = '';
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
