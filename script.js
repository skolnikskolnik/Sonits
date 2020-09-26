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