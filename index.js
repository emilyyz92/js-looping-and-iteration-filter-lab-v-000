// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.toLowerCase() === name.toLowerCase());
  return newarray;
}
