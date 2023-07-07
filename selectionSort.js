function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap elements
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(arr);
console.log(sortedArray);
