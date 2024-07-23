let personName: string = "fAIza syED";
console.log("Lowercase :", personName.toLowerCase()); // To Lower Case
console.log("Uppercase :", personName.toUpperCase()); // To Upper Case
console.log(
  "Titlecase :",
  personName
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join("  ")
);
