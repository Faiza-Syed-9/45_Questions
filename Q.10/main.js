//First Program
var myName = "faiza syed"; // Stored the name "faiza syed" in a variable called myName.
console.log("Titlecase :", myName
    .split(" ")
    .map(function (item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); })
    .join(" "));
// to convert the value written in the variable myName into titlecase, first I convert it into array,
//then I make the first letter of each word to upper case and make the rest of it to lowercase
//Second Program
var personName = "\n\tFaiza Syed\t\n";
// I store a person's name in a variable with whitespaces
console.log("With Spaces :", personName);
//I print the person's name with whitespaces
var personName2 = personName.trim();
//I store the person's name in a variable and strip hte whitespaces
console.log("Without Spaces :", personName2);
//I print the person's name without whitespaces
