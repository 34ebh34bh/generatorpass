const useNumbersInput = document.getElementById("use-numbers");
const useUppercaseLettersInput = document.getElementById("use-uppercase-letters");
const useSpecialSymbolsInput = document.getElementById("use-special-symbols");
const passwordLengthInput = document.getElementById("password-length");
const passwordContainer = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");

let numbers = '1234567890';
let SpecisalSumbols = "%$#@!_-+=)(^*{}";
let symbols = 'qwertyuiopasdfghjklzxcvbnm';

let minPasswordLength = '6';
let maxPasswordLength = '120';

function getRandomNum(max) {
   return Math.floor(Math.random() * max);
}

function getPasswordSymbol() {
   let PasswordSymbols = symbols;
   if(useNumbersInput.checked) {
    PasswordSymbols += numbers;
   }
   if(useUppercaseLettersInput.checked) {
    PasswordSymbols += symbols.toUpperCase();
   }
   if(useSpecialSymbolsInput.checked) {
    PasswordSymbols += SpecisalSumbols;
   }
 return PasswordSymbols;
}

function getpasswordLength() {
    let PasswordLength = passwordLengthInput.value;
    if(!PasswordLength || PasswordLength < minPasswordLength) {
        PasswordLength = minPasswordLength;
    }else if (PasswordLength > maxPasswordLength) {
        PasswordLength = maxPasswordLength;
    }
    return PasswordLength;
}

function generatePassword() {
    let password = "";
    let PasswordLength = getpasswordLength();
    let PasswordSymbols = getPasswordSymbol();

    for( let i = 0; i < PasswordLength; i++) {
        const generatePAsswordIndex = getRandomNum(PasswordSymbols.length);
        password += PasswordSymbols.charAt(generatePAsswordIndex);
    }
    passwordContainer.textContent = password;
}
generateBtn.onclick = function() {
    generatePassword();
} 