// Assignment Code
var generateBtn = document.querySelector("#generate");
var password=(document.getElementById("password"))
var useNumbers = (false)
var useSpecials = (false)
var useLetters = (false)
var useUppers = (false)
var characterSelection = ([])


var arrNumbers= [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSpecials= [ `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `)`, `+`];
var arrLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrUppers = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function createPassword () {
if (confirm("Would you like to make a password?")) {
  // console.log (true);

  //Set password length
  var passwordLength = window.prompt(
    "How long would you like your password? - You can choose between 8 and 128 characters."
  );
  //verify password length is valid:
  { console.log(passwordLength) }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be between 8 and 128 characters!");
  }
  if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer!");
  }

  // Confirm useNumber
  if (confirm("Would you like to use numbers?")) {
    (useNumbers = true);
  }

  //  Confirm useSpecial
  if (confirm("Would you like to use special characters?")) {
    (useSpecials = true);
  }

  // Confirm use letters
  if (confirm("Would you like to use letters?")) {
    (useLetters = true);
  }

  // Confirm use Uppercase
  if (confirm("Would you like to use UPPERCASE?")) {
    (useUppers = true);
  }
  
  function useCharacter () {
    console.log("Running!!!!!!!")
    if(useNumbers === true) {
      characterSelection = characterSelection.concat(arrNumbers)
      console.log(characterSelection)
    } if(useSpecials === true) {
      characterSelection = characterSelection.concat(arrSpecials)
      console.log(characterSelection)
    } if(useLetters === true) {
      characterSelection = characterSelection.concat(arrLetters)
      console.log(characterSelection)
    } if(useUppers === true) {
      characterSelection = characterSelection.concat(arrUppers)
      console.log(characterSelection)
    }
    var randomItem = ""
    
    for (let index = 0; index < passwordLength; index++) {
      randomItem += characterSelection[Math.floor(Math.random()*characterSelection.length)];
      console.log(randomItem)
    }
    password.innerHTML = randomItem;
  }
  useCharacter()
  };}
