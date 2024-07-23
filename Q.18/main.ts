let fvrtPlaces: string[] = [
  "Seoul",
  "Iceland",
  "Antartica",
  "Tokyo",
  "Bangkok",
  "Los Angeles",
  "Thailand",
  "Beijing",
  "Maldives",
];

console.log("Original Order :", fvrtPlaces);
console.log("Alphabetical Order :", [...fvrtPlaces].sort());
console.log("Original Order :", fvrtPlaces);
console.log("Reverse Alphabetical Order :", [...fvrtPlaces].sort().reverse());
console.log("Original Order :", fvrtPlaces);
console.log("Reverse Order :", [...fvrtPlaces].reverse());
console.log("Reverse-Reverse Order :", [...fvrtPlaces].reverse().reverse());
console.log(
  "Reverse-Reverse-Sort Order :",
  [...fvrtPlaces].reverse().reverse().sort()
);
console.log(
  "Reverse-Reverse-Sort-Sort Order :",
  [...fvrtPlaces].reverse().reverse().sort().sort()
);
