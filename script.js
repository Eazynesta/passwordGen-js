const genButton = document.getElementById("generate");
const thePass = document.getElementById("thePass");

const lowerCaseCheckbox = document.getElementById("lowerCase");
const upperCaseCheckbox = document.getElementById("upperCase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

function generate(passLength,includeLower,includeNumber,includeSymbol,includeUpper){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbol = "!@#$%^&*()_+=";
    const length = passLength;
    let allowedChars = "";
    let password = "";

    allowedChars += includeUpper ? upper : "";
    allowedChars += includeLower ? lower : "";
    allowedChars += includeNumber ? number : "";
    allowedChars += includeSymbol ? symbol : "";

    for(let i = 0; i < length ;i++){
        const random = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[random];
    }

    return password;
};


genButton.onclick = function() {
    const passLength = document.getElementById("textBox").value;

    // Check the state of each checkbox
    const includeLower = lowerCaseCheckbox.checked;
    const includeUpper = upperCaseCheckbox.checked;
    const includeNumber = numbersCheckbox.checked;
    const includeSymbol = symbolsCheckbox.checked;

    // Generate password based on the selected options
    let password = generate(passLength, includeLower, includeNumber, includeSymbol, includeUpper);
    thePass.textContent = password;
    console.log(`Generated Pass: ${password}`);
};

