function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Login successful!");
    return true; // submit form
}

// Check password strength
function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("password-strength-text");
    var strengthBar = document.getElementById("strength-bar");
    
    if (password.length === 0) {
        strengthText.innerHTML = "";
        strengthBar.style.width = "0%";
        return;
    }

    var strength = 0;

    // Check password criteria
    if (password.length >= 6) strength += 1; // Minimum 6 characters
    if (password.match(/[A-Z]/)) strength += 1; // Uppercase letters
    if (password.match(/[0-9]/)) strength += 1; // Numbers
    if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) strength += 1; // Special characters

    // Update strength bar and text based on strength score
    switch (strength) {
        case 1:
            strengthText.innerHTML = "Weak";
            strengthBar.style.width = "25%";
            strengthBar.style.backgroundColor = "#ff0000";
            break;
        case 2:
            strengthText.innerHTML = "Moderate";
            strengthBar.style.width = "50%";
            strengthBar.style.backgroundColor = "#ffae42";
            break;
        case 3:
            strengthText.innerHTML = "Strong";
            strengthBar.style.width = "75%";
            strengthBar.style.backgroundColor = "#ffc107";
            break;
        case 4:
            strengthText.innerHTML = "Very Strong";
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "#28a745";
            break;
        default:
            strengthText.innerHTML = "";
            strengthBar.style.width = "0%";
    }
}
