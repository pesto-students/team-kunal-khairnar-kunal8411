function vowelCount(str) {
    const vowelMap = new Map();
    const vowels = new Set(["a", "e", "i", "o", "u"]);
  
    for (let char of str) {
      let lowerCaseChar = char.toLowerCase();
      if (vowels.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, (vowelMap.get(lowerCaseChar) || 0) + 1);
      }
    }
  
    return vowelMap;
  }
  
  const result = vowelCount("Hello, World!");
  console.log(result); // Output: Map { 'e' => 1, 'o' => 2 }
  
