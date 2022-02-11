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
  var passLength = prompt("Choose between 8 and 128 characters long.");
  var lowerPass = confirm("Would you like lower case?");
  var upperPass = confirm("Would you like upper case?");
  var numericPass = confirm("Would you like numbers?");
  var specialPass = confirm("Would you like special characters?");

  if (passLength > 7 && passLength < 129) {
  } else {
    passLength = prompt("Must choose between 8 and 128 characters long.");
  }
  if (lowerPass || upperPass || numericPass || specialPass === true) {
  } else {
    alert("You must choose at least one requirement.");
  }

  // something to store the final output of password.

  var x = Math.floor(Math.random(passwordLength));
  var passwordArray = [];
  var finalPassword = "";
  if (lowerPass === true) {
    passwordArray = passwordArray.concat(lowerCase);
  }
  if (upperPass === true) {
    passwordArray = passwordArray.concat(upperCase);
  }
  if (numericPass === true) {
    passwordArray = passwordArray.concat(numericChar);
  }
  if (specialPass === true) {
    passwordArray = passwordArray.concat(specialChar);
  }
  console.log(passwordArray);
  // var finalPassword =  {
  //   getRandomInt: function (max) {
  //     return Math.floor(Math.random())
  //   }
  // }

  // return finalPassword;
  //end of code line here do not lose!!
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // var lowerPass = window.confrim(true);
  // var upperPass = window.confrim(true);
  // var numericPass = window.confrim(true);
  // var specialPass = window.confrim(true);
  // if (lowerPass && upperPass && numericPass && specialPass === false) {
  //   windows.prompt("You must choose one response.");

  passwordText.value = password;
}

// var random = {
//   getRandomInt: function (max) {
//     return Math.floor(Math.random() * max);
//   },
// };
// random.getRandomInt(finalPasswordArray.length);
// ----------------------------

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
