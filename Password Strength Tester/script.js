const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const toggleBtn = document.getElementById("toggleBtn");
const barInner = document.getElementById("bar-inner");

toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show";
    }
});

passwordInput.addEventListener("input", () => {
    const pwd = passwordInput.value;
    let strength = 0;

    if (pwd.length > 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    if (strength === 0) {
        strengthText.textContent = "Strength: None";
        strengthText.style.color = "black";
        barInner.style.width = "0%";
    } else if (strength === 1) {
        strengthText.textContent = "Strength: Weak";
        strengthText.style.color = "red";
        barInner.style.width = "33%";
        barInner.style.background = "red";
    } else if (strength === 2) {
        strengthText.textContent = "Strength: Medium";
        strengthText.style.color = "orange";
        barInner.style.width = "66%";
        barInner.style.background = "orange";
    } else if (strength >= 3) {
        strengthText.textContent = "Strength: Strong";
        strengthText.style.color = "green";
        barInner.style.width = "100%";
        barInner.style.background = "green";
    }
});
