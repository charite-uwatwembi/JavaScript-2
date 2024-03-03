function calculateBMI(weight, height) {
    // Convert height from centimeters to meters
    const heightInMeters = height / 100;
  
    
    const bmi = weight / (heightInMeters * heightInMeters);
  
    
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  const personWeight = 60; // in kilograms
  const personHeight = 156; // in centimeters
  
  const bmiResult = calculateBMI(personWeight, personHeight);
  console.log(`Person's Weight: ${personWeight} kg\nPerson's Height: ${personHeight} cm\nBMI Classification: ${bmiResult}`);
  