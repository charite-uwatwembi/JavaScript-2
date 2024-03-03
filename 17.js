function ageClassification(age) {
    if (age >= 0 && age <= 12) {
      return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
      return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
      return "COMMITMENT";
    } else {
      return "LEGACY";
    }
  }
  
  
  const personAge = 25;
  const classification = ageClassification(personAge);
  console.log(`Person's Age: ${personAge}\nClassification: ${classification}`);
  