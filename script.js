document.getElementById("admin-form").addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Log the username and password
        console.log("Username:", username);
        console.log("Password:", password);
        
        // Here you can add an AJAX request or further processing
    }
});

console.log("Form script loaded.");
document.getElementById("contect").addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;


    const response = { name, mail, message, date: new Date().toISOString() };
    const responses = JSON.parse(localStorage.getItem('responses')) || [];

    responses.push(response);
    localStorage.setItem("responses", JSON.stringify(responses));
    console.log(responses);
    this.reset();
});
