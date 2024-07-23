var magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Dynamo",
    "Penn Jillette",
    "Teller",
];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
        console.log(magicians[i]);
    }
}
make_great(magicians);
