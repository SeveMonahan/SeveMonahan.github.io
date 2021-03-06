////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  console.log(`start ${start} end ${end} step ${step}`);

  if(step === undefined){
    step = 1;
  }

  var results = [];

  if(start === end){
    return [];
  }

  if(start < end && 0 < step){
    for(var i = start; i <= end; i+=step){
      results.push(i);
    }

    return results;
  }
  return [];
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var results = [];

  for (var i = array.length - 1; i >= 0; i--){
    results.push(array[i]);
  }

  return results;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var newArray = reverseArray(array);
  for(var i = 0; i < array.length; i++){
    array[i] = newArray[i];
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var object = null;

  for(var i = array.length - 1; i >= 0; i--){
    object = {value: array[i], rest: object};
  }

  return object;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var results = [];
  while(list.rest != null){
    results.push(list.value);
    list = list.rest;
  }

  results.push(list.value);

  return results;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(val, list) {
  return {value: val, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  return listToArray(list)[n];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  if(obj1 === null && obj2 === null){
    return true;
  }else if(typeof obj1 === "object" && typeof obj2 === "object"){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
      return false;
    }

    for(key in obj1){
      if(!deepEqual(obj1[key], obj2[key])){
        return false;
      }
    }

    return true;
  }

  return obj1 === obj2;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
