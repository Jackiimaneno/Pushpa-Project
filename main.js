// Password Input field validation

const passwordInput = document.getElementById("password");
const passwordHelpText = document.getElementById("password-help");

passwordInput.addEventListener("input", (e) => {
    const userInput = e.target.value;
    passwordHelpText.style.color = userInput.length >= 8 ? "green" : "red";
});