//Task 67a: Object Properties


function printObjectProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}


const sampleObject = { name: 'John', age: 25, city: 'New York' };
printObjectProperties(sampleObject);

//Task 67b: Object Values


function printObjectValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
    }
  }
}


const sampleObjectVal = { name: 'John', age: 25, city: 'New York' };
printObjectValues(sampleObjectVal);

//Task 67c: Object Key Search


function searchObjectKey(obj, targetKey) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && key === targetKey) {
      return `Key '${targetKey}' found with value: ${obj[key]}`;
    }
  }
  return `Key '${targetKey}' not found`;
}

const sampleObjectSea = { name: 'John', age: 25, city: 'New York' };
const searchResult = searchObjectKey(sampleObjectSea, 'age');
console.log(searchResult);

//Task 67d: Object Manipulation


function modifyObjectValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] * 2; // Modify values based on condition
    }
  }
  return obj;
}


const sampleObjectMan = { a: 5, b: 10, c: 15 };
const modifiedObject = modifyObjectValues(sampleObjectMan);
console.log('Modified Object:', modifiedObject);

//Task 67e: Object Filtering


function filterObject(obj, condition) {
  const filteredObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && condition(obj[key])) {
      filteredObject[key] = obj[key];
    }
  }
  return filteredObject;
}


const sampleObjectFil = { a: 5, b: 10, c: 15, d: 20 };
const filteredObject = filterObject(sampleObjectFil, value => value > 10);
console.log('Filtered Object:', filteredObject);

//Task 67f: Object Merging


function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}


const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log('Merged Object:', mergedObject);

//Task 67g: Object Size

function getObjectSize(obj) {
  return Object.keys(obj).length;
}


const sampleObjectSize = { name: 'John', age: 25, city: 'New York' };
const objectSize = getObjectSize(sampleObjectSize);
console.log('Object Size:', objectSize);


//Task 67h: Nested Object


const nestedObject = {
  person: {
    name: 'Alice',
    age: 30,
    address: {
      city: 'Wonderland',
      country: 'Fantasyland'
    }
  }
};

console.log('Nested Object Value:', nestedObject.person.address.city);


//Task 67i: Object Sorting


function sortObjectKeysAlphabetically(obj) {
  const sortedObject = {};
  Object.keys(obj).sort().forEach(key => {
    sortedObject[key] = obj[key];
  });
  return sortedObject;
}


const sampleObjectSort = { b: 2, a: 1, c: 3 };
const sortedObject = sortObjectKeysAlphabetically(sampleObjectSort);
console.log('Sorted Object:', sortedObject);


//Task 67j: Object Transformation


function transformObjectValues(obj, transformationFunction) {
  const transformedObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      transformedObject[key] = transformationFunction(obj[key]);
    }
  }
  return transformedObject;
}


const sampleObject1 = { a: 'apple', b: 'banana', c: 'cherry' };
const uppercaseObject = transformObjectValues(sampleObject1, value => value.toUpperCase());
console.log('Uppercase Object:', uppercaseObject);