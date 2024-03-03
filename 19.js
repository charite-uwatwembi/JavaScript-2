function countNonSpaceCharacters(inputString) {
    
    const nonSpaceCharacters = inputString.replace(/\s/g, '');
    const count = nonSpaceCharacters.length;
    return count;
  }
  
  
  const inputString = "Hello World";
  const characterCount = countNonSpaceCharacters(inputString);
  console.log(`For the string: "${inputString}"\nThe number of characters is ${characterCount}`);
  