// Set these variables on a global scope rather than locally
var optionalPasscode = ''
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var specialChars =  "!£$%^&*()_~<>:|[]";
var integerChars = "0123456789";


// Assignment Code
var generateBtn = document.querySelector("#generate");


// This code/function here helps to generate a password on the HTML page
function generatePassword() {


// Prompt Area to let user know the criteria they can choose to generate their own password(This comes before password gets generated)
var length = prompt("How much length do you want your password to be?  Note:Between 8-128 characters")
console.log(length)
if(length < 8 || length > 128 || isNaN(length)) {
alert("Password NEEDS to be between 8 to 128 characters")
return false
}

if (confirm("Would you like uppercase characters within your password?")) {
optionalPasscode = optionalPasscode.concat(uppercaseChars);
}
if (confirm("Would you like lowercase characters within your password?")) {
optionalPasscode = optionalPasscode.concat(lowercaseChars);
}
if (confirm("Would you like special characters within your password?")) {
optionalPasscode = optionalPasscode.concat(specialChars);
}
if (confirm("Would you like numbered characters within your password?")) {
optionalPasscode = optionalPasscode.concat(integerChars);
}

var randomPassword = ''
// This part allows the code to allocate/generate random letters or numbers
for (var i = 0; i < length; i++)  {
  var chosenNumber = Math.floor(Math.random() * optionalPasscode.length );
  
  randomPassword = randomPassword + optionalPasscode[chosenNumber];
  }
  return randomPassword;
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
