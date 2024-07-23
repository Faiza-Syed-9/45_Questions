function make_shirt(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The shirt is of Size :", size, "and The message printed on it is", message);
}
make_shirt();
make_shirt("M");
make_shirt("S", "Hello World!");
