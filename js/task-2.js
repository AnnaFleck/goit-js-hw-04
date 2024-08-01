function makeArray(firstArray, secondArray, maxLength) {
  const joinedArray = firstArray.concat(secondArray);
  if (joinedArray.length <= maxLength) {
  }
  return joinedArray.slice(0, maxLength);
}
