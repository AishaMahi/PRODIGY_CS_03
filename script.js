document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const password = document.getElementById("password").value;
    const strength = complexityChecker(password);

    document.getElementById("strength").innerText = strength;
    document.getElementById("result").classList.remove("hidden");
});

function complexityChecker(password) {
    const lengthScore = password.length >= 8;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const digit = /\d/.test(password);
    const special = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password);
    
    const total = [lengthScore, upperCase, lowerCase, digit, special].filter(Boolean).length;
    
    if (total === 5) {
        return "Strong Password";
    } else if (total >= 3) {
        return "Good Password";
    } else {
        return "Weak Password";
    }
}
