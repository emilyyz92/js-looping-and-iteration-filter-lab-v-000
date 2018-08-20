// Code your solution in this file
function findMatching(array, name) {
  const newarray = array.filter(word => word.tolowercase() === name.tolowercase());
  return newarray;
}
