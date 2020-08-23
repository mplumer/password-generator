// Assignment code here
// Password Characters
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphabetcap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let specialchars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";
let password = "";

// Generate Password Function
const generatePassword = () =>{

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);