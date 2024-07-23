function make_Sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Your Sandwich will contain the following ingredients :");
    for (var i = 0; i < ingredients.length; i++) {
        console.log("-", ingredients[i]);
    }
    console.log("\n Your Sandwich is Ready!");
}
// make_Sandwich("Ham", "Cheese", "Lettuce", "Tomato");
// make_Sandwich("Turkey", "Bacon", "Avocado");
// make_Sandwich("Peanut Butter", "Jelly");
// make_Sandwich("Meat","Chicken","Lettuce","Ketchup");
make_Sandwich("meat", "lettuce", "mayo", "ketchup", "cheese");
make_Sandwich("cheese", "fried chicken", "mayo", "ketchup", "lettuce", "bread", "onion", "chilli", "spice", "sauce", "money");
