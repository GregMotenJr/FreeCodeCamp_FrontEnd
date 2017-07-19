function buttonCoordinates(xValue, yValue, array) {
    array.push({ x: xValue, y: yValue });
}
// Create buttons array and add a few buttons
var buttons = [];
buttonCoordinates(0, 0, buttons);
buttonCoordinates(0, 1, buttons);
buttonCoordinates(2, 2, buttons);

//to get X and Y values from array
//buttons[0].x 
//buttons[0].y 

// to loop through coordinate values
for (var i = 0; i < buttons.length; i++) {
    var x = buttons[i].x;
    var y = buttons[i].y;
}

buttons.sort();

// still learning javascript I have spent the least time with but I am working though some tutorials and creating
//some web apps on my GitHub 

