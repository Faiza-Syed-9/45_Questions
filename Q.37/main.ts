function make_shirt(size: string = "L", message: string = "I Love Typescript") {
    console.log(
      "The shirt is of Size :",
      size,
      "and The message printed on it is",
      message
    );
  }

  make_shirt();
  make_shirt("M");
  make_shirt("S","Hello World!")