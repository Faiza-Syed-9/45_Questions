var current_users = ["john", "alice", "eric", "mary", "mike"];
var new_users = ["John", "ALICE", "steve", "laura", "peter"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("The username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
