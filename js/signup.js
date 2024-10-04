    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return emailPattern.test(email);
    }

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const confirmPassword = document.getElementById('pass').value;
        const validationMessage = document.getElementById('validation-message');

        validationMessage.innerText = "";

        if (firstName.length < 2) {
            validationMessage.innerText = "First Name must be at least 2 characters long";
            return;
        }

        if (!validateEmail(email)) {
            validationMessage.innerText = "Email must be a valid @gmail.com address";
            return;
        }

        if (password.length < 8) {
            validationMessage.innerText = "Password must be at least 8 characters long";
            return;
        }

        if (password !== confirmPassword) {
            validationMessage.innerText = "Passwords don't match";
            return;
        }

        alert("Account successfully created!");
    });

