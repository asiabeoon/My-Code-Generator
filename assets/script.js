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

// Prompt to ask for character length within generate password function

function getPasswordOptions () {
  //parseInt method takes values in string and turns it to an integer/number
  var length = parseInt (prompt("How many characters would you like in your password? "));
  
  if (Number.isNaN(length)) {
    alert ("The password length provided must be a number");
    return null;
  }
  if (length <8) {
    alert ("The password length must be at least 8 characters!");
    return null;
  }
  if (length > 128) {
    alert ("The password length must be less than 128 characters!");
    return null;
  }

//User Input to confirm true or false for what will be in passsword//

var hasNumberChar =confirm ("Click OK if you want numbers in your password?")

var hasUpperCase  =confirm ("Click OK if you want Upper Case letters in your password?")

var hasLowerCase  =confirm ("Click OK if you want Lower Case letters in your password?")

var hasSpecialChar  =confirm ("Click OK if you want Special Characters in your password?")

//Checking to see if the user didn't click OK for any of the options

if (
  hasNumberChar === false && 
  hasUpperCase === false &&
  hasLowerCase === false &&
  hasSpecialChar === false 
){
  alert ("Must select at least one character type!");
  return null;
}

//Variable to store all of User Inputs in Password Options
var passwordOptions = {
  //key value pairs
  length: length,
  hasNumberChar: hasNumberChar,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase,
  hasSpecialChar: hasSpecialChar
}
return passwordOptions;
}

//Takes a array and generates a random number between 0 and length of the array Returns element 
//at the random index.
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement
}

// Generates password output
function generatePassword () {
  var options = getPasswordOptions ();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

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
