var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fvrtPlaces = [
    "Seoul",
    "Iceland",
    "Antartica",
    "Tokyo",
    "Bangkok",
    "Los Angeles",
    "Thailand",
    "Beijing",
    "Maldives"
];
console.log("Original Order :", fvrtPlaces);
console.log("Alphabetical Order :", __spreadArray([], fvrtPlaces, true).sort());
console.log("Original Order :", fvrtPlaces);
console.log("Reverse Alphabetical Order :", __spreadArray([], fvrtPlaces, true).sort().reverse());
console.log("Original Order :", fvrtPlaces);
console.log("Reverse Order :", __spreadArray([], fvrtPlaces, true).reverse());
console.log("Reverse-Reverse Order :", __spreadArray([], fvrtPlaces, true).reverse().reverse());
console.log("Reverse-Reverse-Sort Order :", __spreadArray([], fvrtPlaces, true).reverse().reverse().sort());
console.log("Reverse-Reverse-Sort-Sort Order :", __spreadArray([], fvrtPlaces, true).reverse().reverse().sort().sort());
