// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.toLowerCase() === name.toLowerCase());
  return newarray;
}

function fuzzyMatch(array, string) {
  function matchFuzzy(string) {
    for (let n = 0; n <= string.length; n++) {
      array[n] === string[n]
    }
  }
  const newArray = array.filter(word => word.slice(0, string.length).toLowerCase === string.toLowerCase);
  return newArray;
}