function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("password-strength-text");

    let strength = 0;

    // Check password length
    if (password.length >= 6) {
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
        strength += 1;
    }

    // Update strength bar and text
    switch (strength) {
        case 0:
        case 1:
            strengthBar.style.width = "20%";
            strengthBar.style.backgroundColor = "#ff0000"; // Red
            strengthText.innerText = "Weak";
            break;
        case 2:
            strengthBar.style.width = "40%";
            strengthBar.style.backgroundColor = "#ff8000"; // Orange
            strengthText.innerText = "Fair";
            break;
        case 3:
            strengthBar.style.width = "60%";
            strengthBar.style.backgroundColor = "#80ff00"; // Yellow
            strengthText.innerText = "Good";
            break;
        case 4:
            strengthBar.style.width = "80%";
            strengthBar.style.backgroundColor = "#00ff00"; // Green
            strengthText.innerText = "Strong";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "#008000"; // Dark Green
            strengthText.innerText = "Very Strong";
            break;
        default:
            strengthBar.style.width = "0%";
            strengthText.innerText = "";
    }
}

function validateForm() {
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

function createAccount() {
    // Functionality for creating a new account can go here
    alert("Create Account feature is not implemented yet.");
}
