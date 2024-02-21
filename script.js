const genButton = document.getElementById("generate");
const thePass = document.getElementById("thePass");
let passLength;
const includeNumber = true;
const includeLower = true;
const includeUpper = true;
const includeSymbol = true;
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


genButton.onclick = function(){
    passLength = document.getElementById("textBox").value;
    let password = generate(passLength,includeLower,includeNumber,includeSymbol,includeUpper);
    thePass.textContent = `${password}`;
    console.log(`Generated Pass:: ${password}`);
};



