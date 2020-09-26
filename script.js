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

if (validLength == true) {

}
else {
  alert("You must enter a number between 8 and 128, when it pops up, enter such a number");
  window.location.href = "index.html";
}

//type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
//Asks user if they want special characters
var specChar = confirm("Do you want special characters?");
console.log("Wants special characters: " + specChar);

//Asks if user wants uppercase letters
var upperCase = confirm("Do you want upper case letters?");
console.log("Wants upper case letters: " + upperCase);

//Asks if user wants lowercase letters
var lowerCase = confirm("Do you want upper case letters?");
console.log("Wants upper case letters: " + lowerCase);

//Asks if user wants numbers
var numYes = confirm("Do you want upper case letters?");
console.log("Wants numbers: " + numYes);

//Validate the user selected at least one character type.
if (lowerCase == true || specChar == true || upperCase == true || numYes == true) {
  console.log("User selected one type");
}
else {
  console.log("They need to start over" + inputValid);
  alert("You must start over, selecting at least one type of character");
  window.location.href = "index.html";
}

//Now to generate random values

//Below generates all lower case password
var justLetters = "abcdefghijklmnopqrstuvwxyz";
randomStr(pwrdLength, justLetters)
function randomStr(len, arr) { 
  var anslwr = ''; 
  for (var i = len; i > 0; i--) { 
      anslwr +=  
        arr[Math.floor(Math.random() * arr.length)]; 
  } 
  console.log(anslwr);
} 

//Below generates lower/upper case password
var uplwrLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
uplrwStr(pwrdLength, uplwrLetters)
function uplrwStr(len, arr) { 
  var ansup = ''; 
  for (var i = len; i > 0; i--) { 
      ansup +=  
        arr[Math.floor(Math.random() * arr.length)]; 
  } 
  console.log(ansup);
} 

