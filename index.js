// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.toLowerCase() === name.toLowerCase());
  return newarray;
}

function fuzzyMatch(array, string) {
  function match(word, string) {
    return word.slice(0, string.length).toLowerCase === string.toLowerCase;
  }
  const newArray = array.filter(word => match(word, string));
  debugger;
  return newArray;
}
