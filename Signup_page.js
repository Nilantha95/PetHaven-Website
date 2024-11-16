// JavaScript Document
function handleSignUp() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (fullname && email && password) {
        alert(`Thank you for signing up, ${fullname}!`);
        window.location.href = "Homepage.html"; // Redirect to home page
    } else {
        alert("Please fill in all fields.");
    }
}
