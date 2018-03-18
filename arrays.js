var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// addElementToBeginningOfArray([1,2,3], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  // var colors = [green, red, blue];
  // colors[0] // green
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 // [1,2,3]
   array.shift();
 // [2,3]
   return array;
}
// a [2,3]

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  // [1,2,3]
  array.pop(); // 3
  return array; // [1,2]
=======
  return array.pop();
>>>>>>> def2fdd41ddb7c48ca73afeee593e276714f878c

}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}
