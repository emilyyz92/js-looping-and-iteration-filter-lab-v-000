// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.toLowerCase() === name.toLowerCase());
  return newarray;
}

function fuzzyMatch(array, string) {
  const newArray = array.filter(word => word.slice(0, string.length).toLowerCase === string.toLowerCase);
  return newArray;
}
