document.addEventListener("DOMContentLoaded", function () {
    var usernameErrorElement = document.getElementById("usernameError");
    var passwordErrorElement = document.getElementById("passwordError");

    document.getElementById("user-input").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;
        var isValid = true;

        if (!validateEmail(enteredUsername)) {
            setUsernameError(false);
            isValid = false;
        } else {
            setUsernameError(true);
        }

        if (!validatePassword(enteredPassword)) {
            setPasswordError(false);
            isValid = false;
        } else {
            setPasswordError(true);
        }

        if (isValid) {
            alert("Validation successful!");
            // Proceed with form submission or further processing
        }
    });

    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function setUsernameError(isValid) {
        if (!isValid) {
            usernameErrorElement.textContent = 'Insert a valid email address.';
        } else {
            usernameErrorElement.textContent = '';
        }
    }

    function setPasswordError(isValid) {
        if (!isValid) {
            passwordErrorElement.textContent = 'Password must be at least 8 characters long.';
        } else {
            passwordErrorElement.textContent = '';
        }
    }
});
