function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('pass').value;

    if (!validateEmail(emailInput)) {
        document.getElementById('validation-message').innerText = "Email harus menggunakan @gmail.com";
        return;
    } 

    if (passwordInput.length < 8) {
        document.getElementById('validation-message').innerText = "Password harus minimal 8 karakter";
        return;
    }

    document.getElementById('validation-message').innerText = "";

    alert("Loading...");

    setTimeout(function() {
        alert("Login successful!");
    }, 2000);
});