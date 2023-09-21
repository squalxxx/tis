let strings = ["Hello", "World", "JavaScript"];
let reversedStrings = strings.map((string) => string.split("").reverse().join(""));

console.log(reversedStrings);