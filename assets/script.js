// Assignment code here
// Setting Arrays characters that the generator can use
var numberChar = ["0","1","2","3", "4", "5", "6", "7", "8", "9"];
var upperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar =["!", "#", "$", "%", "^", "&", "*", "<", ">", "/", "~", "_", "-", "+"]; 

// Setting Variables for Prompts for User Input

var hasNumberChar;
var hasUpperCase;
var hasLowerCase;
var hasSpecialChar;


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
