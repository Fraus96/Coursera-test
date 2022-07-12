var student = {
    name:"",
    type: "student"
}; // Student object with a name and type(student)

document.addEventListener('DOMContentLoaded', contentLoaded);
//SetUp some listeners for different events, the first one is "DOMContentLoaded", it is going to fire the function
// when the entire page is loaded and istantieded inside the browser memory

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
// This function look for the element with an id name and sets up a keyUp listener, so every time you press a key inside of that text box
// it will fire the keyup function and the keyUp function will call the calculate numeric output function
}

function keyUp(event) {
    calculateNumericOutput();
    // It will calculate the numeric value output of the imput text box
}

function calculateNumericOutput() {
    student.name =document.getElementById('name').value;
// Grabs the value of the input field  in out html page and saves into that object "student.name"
    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++) {
        totalNameValue += student.name.charCodeAt(i);
//  Next it loops over that student.name and looks at the character code at each position within the string, then it kind of add them all up, 
// it creates an output string total numeric value of a person's name and adds to it the total numeric value
    }
var output = "Total numeric value of person's name is " + totalNameValue;
document.getElementById('output').innerText = output;
// then it pulls the element that has the id output and sets its inner text property to our output
}