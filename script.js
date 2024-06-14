const passwordbox = document.getElementById("password");
const length = 8;

const uppercase = "ABCDEGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "01213456789"
const symbol = "!@#$%^&*()_+{}|:>?";

const allChars = uppercase + lowercase + number + symbol ;

function creatPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += lowercase[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;

}

function copyPassword() {
    passwordbox.select();
    document.exeCommand("copy");
}
