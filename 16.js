//a. Create a function to sort and arrange the elements of the array in ascending order:
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  
  var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
  console.log('Original Array:', someNumbers);
  
  var sortedArray = sortAscending(someNumbers);
  console.log('Sorted Array (Ascending):', sortedArray);
  
  //b. Modify the array to display the last 3 numbers and the first 3 numbers in front of the sorted array:
  function modifyArray(arr) {
    const firstThree = arr.slice(0, 3);
    const lastThree = arr.slice(-3);
    const sortedArray = sortAscending(arr);
  
    return lastThree.concat(sortedArray, firstThree);
  }
  
  
  var modifiedArray = modifyArray(someNumbers);
  console.log('Modified Array:', modifiedArray);
  
  //c. Display the first 3 numbers from the sorted array:
  function displayFirstThreeSorted(arr) {
    const sortedArray = sortAscending(arr);
    return sortedArray.slice(0, 3);
  }
  
  
  var firstThreeSorted = displayFirstThreeSorted(someNumbers);
  console.log('First 3 Numbers from Sorted Array:', firstThreeSorted);
  