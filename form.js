function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    // Create a new row
    var newRow = document.createElement("tr");

    // Create cells for each field and append them to the new row
    newRow.innerHTML = "<td><input type='text' value='" + name + "'></td>" +
                       "<td><input type='number' value='" + age + "'></td>" +
                       "<td><input type='text' value='" + gender + "'></td>" +
                       "<td><input type='text' value='" + course + "'></td>" +
                       "<td><input type='email' value='" + email + "'></td>" +
                       "<td><button onclick='deleteStudent(this.parentNode.parentNode)'>Delete</button></td>";

    // Append the new row to the table body
    document.getElementById("studentTableBody").appendChild(newRow);
}
