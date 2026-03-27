console.log("Script started");

function start() {
    console.log("click");

    // Create h1 heading
    let heading = document.createElement("h1");

    // Set text and its styles
    heading.innerText = "Attendance";
    heading.style.color = "green";

    // Add h1 to page
    document.body.appendChild(heading);

    // Prompting user to add names for attendence
    let userName = prompt("Put in name");

    // Printing name inputted
    console.log(userName);

    addName(userName);

    addSeparator();
}

// Adding names
function addName(newName) {
    // Create h2 heading
    let secondHeading = document.createElement("h2");

    // Set text and its style
    secondHeading.innerText = newName;

    // Add h2 to page
    document.body.appendChild(secondHeading);
}

// Separating each name
function addSeparator() {
    // Create a hr line to separate each name
    let separateNames = document.createElement("hr");

    document.body.appendChild(separateNames);
}