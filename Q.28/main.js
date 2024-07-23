var personAge = 65;
if (personAge <= 2) {
    console.log("The person is a baby.");
}
else if (personAge > 2 && personAge <= 4) {
    console.log("The person is a toddler.");
}
else if (personAge > 4 && personAge <= 13) {
    console.log("The person is a kid.");
}
else if (personAge > 13 && personAge <= 20) {
    console.log("This person is a Teenager.");
}
else if (personAge > 20 && personAge < 65) {
    console.log("This person is an Adult.");
}
else {
    console.log("The person is an Elder.");
}
