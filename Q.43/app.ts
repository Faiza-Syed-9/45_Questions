let magicians: string[] = [
  "Davis Copperfield",
  "Harry Houdini",
  "Dynamo",
  "Penn Jillette",
  "Teller",
];
function show_magicians(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push("The Great", magicians[i]);
  }
  return great_magicians;
}

let great_magicians = make_great([...magicians]);
console.log("Magicians");

show_magicians(magicians);
console.log("\nGreat Magicians");
show_magicians(great_magicians);
