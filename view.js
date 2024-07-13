const passwordBox = document.getElementById('password');
const length = 12;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const btn = document.querySelector('button');
const copyPasd = document.querySelectorAll('#copyPassd');

const allChars = lowerCase + upperCase + numbers + symbols;
const generatePassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

const copyPassword = () => {
    passwordBox.select();
    document.execCommand('copy');
}

btn.addEventListener('click', generatePassword);
copyPassd.addEventListener('click',copyPassword);