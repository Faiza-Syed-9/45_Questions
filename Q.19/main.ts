let guestList: string[] = ["David", "Caroline", "Christine"];

let msg: string =
  ",\n I would like to be Honored to place forward an Invitation for Dinner";

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear\n", guestList[i], msg);
// }
//---------------------------------------Q.15---------------------------------------
let absentGuest: string = "David";

let newGuest: string = "Kalix";

guestList.shift();
guestList.unshift(newGuest);

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear\n", guestList[i], msg);
// }

//console.log("\n",absentGuest, "is not coming to the Dinner");
//--------------------------------------Q.16----------------------------------------
//console.log(
 // "\nThere is more space on the Dining Table, so let's invite 3 more Guests!"
//);

guestList.unshift("Ren");

guestList.splice(2, 0, "Adrien");

guestList.push("Zendaya");

// for (let i = 0; i < guestList.length; i++) {
//   console.log("Dear\n", guestList[i], msg);
// }

//--------------------------------------Q.17-----------------------------------------

//console.log("\n My Apologies! My new Dinning Table won't be arriving in Time, Hence, I can Only Invite 2 Guests");

while (guestList.length>2) {
    let removeGuest = guestList.pop();
    //console.log(removeGuest,"My Apologies! My new Dinning Table won't be arriving in Time, Hence, I can't Invite You");
    
}


// for (let i = 0; i < guestList.length; i++) {
//     console.log("Dear\n", guestList[i], msg);
//   }


  guestList.splice(0,2);
  console.log(guestList);
  //---------------------------------------------Q.19----------------------------------------------
  console.log("the number of people you are inviting to dinner",guestList.length);
  