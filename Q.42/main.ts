let magicians: string[] = [
    "David Copperfield",
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
  


  function make_great(magicians){

for (let i= 0; i < magicians.length; i++) {

    magicians[i]=`The Great ${magicians[i]}`
    console.log(magicians[i]);
    
}

  }


  make_great(magicians);