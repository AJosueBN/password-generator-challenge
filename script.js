// Assignment Code
var generateBtn = document.querySelector("#generate");


// The code here helps to generate a password on the HTML page
function generatePassword() {
var optionalPasscode = ' '
var uppercaseChars = ['A','B','C','D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y','Z' ];
var lowercaseChars = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z' ];
var specialChars = ['!','£','$','%','^','&','*','(' , ')' ,'_' ,'+' ,'|' ,'{' , '}',':','~','<', '>','|'];
var integerChars = ['0','1','2','3','4','5','6','7','8','9'];

// Prompt Area to let user know the criteria they can choose to generate their own password
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




}

for (var i = 0; i < length; i++) {
  var randomNumber = Math.floor(Math.random())


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
