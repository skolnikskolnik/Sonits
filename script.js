// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompts user to enter the length of the password
var pwrdLength = prompt("How many characters?");
pwrdLength = parseInt(pwrdLength);
console.log(pwrdLength);

//Validate that length is between 8 and 128
var validLength = true;
if (pwrdLength >= 8 && pwrdLength <= 128) {
  validLength = true;
}
else {
  validLength = false;
}
console.log("Length is valid: " + validLength);

//type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
var typeChar = ["special characters", "uppercase", "lowercase", "numeric"];

//Asks user if they want special characters
var specChar = confirm("Do you want special characters?");
console.log("Wants special characters: " + specChar);

//Asks if user wants uppercase letters
var upperCase = confirm("Do you want upper case letters?");
console.log("Wants upper case letters: " + upperCase);

//Asks if user wants numbers
var numYes = confirm("Do you want upper case letters?");
console.log("Wants numbers: " + numYes);


