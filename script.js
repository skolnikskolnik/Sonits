//Prompts user to enter the length of the password
var pwrdLength = prompt("How many characters?");
pwrdLength = parseInt(pwrdLength);
console.log(pwrdLength);

//Validate that length is between 8 and 128
var validLength = false;
if (pwrdLength >= 8 && pwrdLength <= 128) {
  validLength = true;
}
else {
  validLength = false;
}

if (validLength !== true){
  alert("You must enter a number between 8 and 128, when it pops up, enter such a number");
  window.location.href = "index.html";
}

//type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
//Asks if user wants lowercase letters
var lowerCase = confirm("Do you want lower case letters?");
console.log("Wants upper case letters: " + lowerCase);

//Asks if user wants uppercase letters
var upperCase = confirm("Do you want upper case letters?");
console.log("Wants upper case letters: " + upperCase);

//Asks if user wants numbers
var numYes = confirm("Do you want numbers?");
console.log("Wants numbers: " + numYes);

//Asks user if they want special characters
var specChar = confirm("Do you want special characters?");
console.log("Wants special characters: " + specChar);

//Validate the user selected at least one character type.
if (lowerCase == false && upperCase == false && numYes == false && specChar == false) {
  alert("You must start over, selecting at least one type of character");
  window.location.href = "index.html";
}

//Now to generate random values (all lower, all lower - just letters)

//Below generates passwords depending on the type of letter chosen
var justLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specList = " !'#$%&'()*+,-./:;<=>?@[\^_`{|}]";

//Putting the strings together based on user input
var userCharacters = "";

//if they want lower case
if (lowerCase == true) {
  userCharacters = userCharacters + justLetters;
}

//if they want lower case
if (upperCase == true) {
  userCharacters = userCharacters + upLetters;
}

//if they want special characters
if (specChar == true) {
  userCharacters = userCharacters + specList;
}

//if they want numbers
if (numYes == true) {
  userCharacters = userCharacters + numList;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var genP = '';
  //Makes a variable of an empty string
  for (var i = pwrdLength; i > 0; i--) {
    //Runs as many times as the user selected
    genP +=
      userCharacters[Math.floor(Math.random() * userCharacters.length)];
  }
  console.log(genP);
  var password = genP;
  var passwordText = document.querySelector("#password");
//This creates a variable passwordText that is the first element of password id ("Your secure password")
  passwordText.value = password;
  //This changes the value of a text field from what it was before to password 

}

// Add event listener to generate button - when clicked, writePassword is run, generating the password (can currently see it in the console log)
generateBtn.addEventListener("click", writePassword);