function calculateGrade() {
    // Prompt the user for input and convert it to a number
    const userInput = prompt("Enter the student's marks from 0 to 100:");
    const marks = parseInt(userInput);

    // Check if the input is a valid number within the specified range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Not a valid number. Please key in a number between 0 and 100.");
        return;
    }

    // The output should correspond to the correct grade
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else if (marks < 40){
        grade = 'E';
    }

    // Display the calculated grade
    alert(`Student's grade: ${grade}`);
}

// Call the function to calculate and display the grade
calculateGrade();