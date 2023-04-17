// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var length = prompt("How many lengths would you like your password to be?")
console.log(length)
if(length < 8 || length > 128 || isNaN(length)) {
alert("Password NEEDS to be between 8 to 128 characters")  
generatePassword() 
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
