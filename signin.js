// JavaScript Document

function handleSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Welcome, ${email}!`);
        window.location.href = "Homepage.html"; // Redirect to home page
    } else {
        alert("Please enter both email and password.");
    }
}
