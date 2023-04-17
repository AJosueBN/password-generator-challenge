// Assignment Code
var generateBtn = document.querySelector("#generate");


// The code here helps to generate a password
function generatePassword() {
var upperCase = ['A','B','C','D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y','Z' ];
var lowerCase = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z' ];
var specialChars = ['!','£','$','%','^','&','*','(' , ')' ,'_' ,'+' ,'|' ,'{' , '}',':','~','<', '>','|'];
var numerics = ['0','1','2','3','4','5','6','7','8','9'];

var length = prompt("How many lengths would you like your password to be?")
console.log(length)
if(length < 8 || length > 128 || isNaN(length)) {
window.alert("Password NEEDS to be between 8 to 128 characters")
window.confirm("Yes or No")  

var = prompt("Would you like lowercase and uppercase characters in your password?")
console.log(lowercase + UpperCase)


}
return
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
