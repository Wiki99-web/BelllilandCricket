document.querySelector("button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in both email and password fields.");
    } else {
        window.location.href = "file:///D:/BCT/Application-form-for-captaincy.html"; // Replace with the desired URL
    }
});