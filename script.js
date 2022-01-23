// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// var useNumbers= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var useSpecial= [ `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `)`, `+`];
// var useLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var useUpper = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useNumbers= ("0123456789");
var useSpecial= ("!@#$%^&*,)+");
var useLetters = ("abcdefghijklmnopqrstuvwxyz");
var useUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
 
if (confirm("Would you like to make a password?")){
  // console.log (true);

//Set password length
  var passwordLength = window.prompt(
    "How long would you like your password? - You can choose between 8 and 128 characters."
  );
  //verify password length is valid:
  {console.log(passwordLength)}
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be between 8 and 128 characters!");
  }
  if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer!");}

// Confirm useNumber}
if (confirm("Would you like to use numbers?")){
console.log(useNumbers);}
// else {console.log(false);};**if used would return false and would add false into the selection

//  Confirm useSpecial
if (confirm("Would you like to use special characters?")){
  console.log (useSpecial);}
// else {console.log(false) };

// Confirm use letters
if (confirm("Would you like to use letters?")){
console.log(useLetters);}
// else {console.log(false) }

// Confirm use letters
if (confirm("Would you like to use UPPERCASE?")){
console.log(useUpper);}
// else {console.log(false)} 
}

for (let i = 0; useNumbers < passwordLength; useNumbers++) {
  // const element = array[index];
  
}