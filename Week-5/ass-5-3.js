function hasDuplicate(arr) {
  const uniqueElements = new Set(arr);
  return uniqueElements.size !== arr.length;
}

console.log(hasDuplicate([1, 5, -1, 4])); // Output: false
console.log(hasDuplicate([1, 5, -1, 4, 1])); // Output: true
