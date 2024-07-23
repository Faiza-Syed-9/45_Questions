"use strict";
let string1 = "hello";
let string2 = "world";
console.log(string1 === "hello"); // True
console.log(string2 === "hello"); // False
console.log(string1 !== "world"); // True
console.log(string2 !== "world"); // False
let mixedCaseString = "HelloWorld";
console.log(mixedCaseString.toLowerCase() === "helloworld"); // True
console.log(mixedCaseString.toLowerCase() === "HELLOWORLD"); // False
console.log(mixedCaseString.toUpperCase() === "helloworld"); // False
console.log(mixedCaseString.toUpperCase() === "HELLOWORLD"); // True
let num1 = 10;
let num2 = 20;
console.log(num1 == num2); // False
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 == num1); // True
console.log(num2 == num2); // True
console.log(num1 <= 10); // True
console.log(num2 >= 15); // True
console.log(num1 <= 5); // False
console.log(num2 >= 25); // False
let age = 25;
let hasID = true;
console.log(age >= 18 && hasID); // True
console.log(age < 18 && hasID); // False
console.log(age >= 18 || hasID); // True
console.log(age < 18 || !hasID); // False
let fruits = ["Mango", "Apple", "Banana"];
console.log(fruits.includes("Mango")); // True
console.log(fruits.includes("Kiwi")); // False
let vegetable = ["Brocolli", "Spinach", "Lettuce"];
console.log(!vegetable.includes("Tomato")); // True
console.log(!vegetable.includes("Brocoli")); // False
