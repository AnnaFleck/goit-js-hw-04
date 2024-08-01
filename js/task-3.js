function filterArray(numbers, value) {
  const bigValue = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      bigValue.push(numbers[i]);
    }
  }
  return bigValue;
}
