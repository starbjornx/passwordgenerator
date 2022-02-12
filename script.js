var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9,"];
var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  "'",
  "/",
  "|",
  "?",
  "~",
  "<",
  ">",
  ";",
  "U+005C",
  "`",
  " ",
  ",",
];
//targets the generate ID #generate (button)
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characterList = [];
  var password = [];

  var passLength = prompt("Choose between 8 and 128 characters long.");
  if (passLength < 8 || passLength > 128) {
    alert("Must choose between 8 and 128 characters long.");
  } else {
    var lowerPass = confirm("Would you like lower case?");
    var upperPass = confirm("Would you like upper case?");
    var numericPass = confirm("Would you like numbers?");
    var specialPass = confirm("Would you like special characters?");
    //validate input
    if (lowerPass) characterList = characterList.concat(lowerCase);
    if (upperPass) characterList = characterList.concat(upperCase);
    if (numericPass) characterList = characterList.concat(numericChar);
    if (specialPass) characterList = characterList.concat(specialChar);

    for (var x = 0; x < passLength; x++) {
      randomPos = Math.floor(Math.random() * characterList.length);
      password.push(characterList[randomPos]);
    }
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
}

generateBtn.addEventListener("click", generatePassword);
