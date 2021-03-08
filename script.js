// this declears the variable and creates and alert for user to follow from lines 2-15
var length = Number(prompt('Hello witless human, would you like to generate a password? '));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select one of each!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}
//THis is the click function to generate a new password
document.addEventListener('click', function() {
  generateNewPassword();
});
// once the generate new password button is pressed these variables allowed
function generateNewPassword() {
  var password = "";
// these are the charaters that are allowed along with the random generator Rando.js
  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowers) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.?");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}