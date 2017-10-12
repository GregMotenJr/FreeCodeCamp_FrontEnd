
// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var Lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",

    };
    result = Lookup[val];

    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");
