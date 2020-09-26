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
console.log("Length is valid: " + validLength);

if (validLength == true) {

}
else {
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
  console.log("They need to start over");
  alert("You must start over, selecting at least one type of character");
  window.location.href = "index.html";
}
else {
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
if(lowerCase == true){
  userCharacters = userCharacters + justLetters;
}
else{}

//if they want lower case
if(upperCase == true){
  userCharacters = userCharacters + upLetters;
}
else{}

//if they want special characters
if(specChar == true){
  userCharacters = userCharacters + specList;
}
else{}

//if they want numbers
if(numYes == true){
  userCharacters = userCharacters + numList;
}
else{}

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


//This generates a variable called anslwr that is the password
var password = randomStr();

function randomStr() { 
  var genPasswd = ''; 
  for (var i = pwrdLength; i > 0; i--) { 
      genPasswd +=  
        userCharacters[Math.floor(Math.random() * userCharacters.length)]; 
  } 
  console.log(genPasswd);
} 