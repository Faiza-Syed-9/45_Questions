let current_users: string[] = ["john", "alice", "eric", "mary", "mike"];

let new_users: string[] = ["John", "ALICE", "steve", "laura", "peter"];
for (let new_user of new_users) {
    let isTaken = false;
    for (let current_user of current_users) {
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            isTaken = true;
            break;
        } }

        if (isTaken) {
            console.log(`The username '${new_user}' is already taken. Please enter a new username.`);
        } else {
            console.log(`The username '${new_user}' is available.`);
        }
    }