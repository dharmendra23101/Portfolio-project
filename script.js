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
