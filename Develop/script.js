// Assignment Code
var generateBtn = document.querySelector("#generate");


var userChoice;



 

// 1. Prompt the user for the password criteria
function generatePassword() {
  console.log("Hey you clicked the button!");
  var finalPassword;

  var createPassword = window.prompt("How many characters will you password to contain?")

  console.log(createPassword)
  
  //  a.password between 8 and 128
  if(createPassword < 8 || createPassword > 128) {
    window.alert("Your password must be between 8 and 128 characters.")
    return generatePassword();
  } 
// //  b. Lowercase, Uppercase, Numbers, and Special Characters
  
  var lowercaseLettersConfirm = window.confirm("Do you want lowercase letters?")
  var uppercaseLettersConfirm = window.confirm("Do you want uppercase letters?")
  var numbersConfirm = window.confirm("Do you want numbers?")
  var specialCharactersConfirm = window.confirm("Do you want special characters?")
  
  var numbers = "0123456789";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()?~"; 

  for (var c = 0; c <= createPassword; c++) {
    console.log(c);
  
  } 
  const num = numbers.split("")
  console.log(num)
  if (lowercaseLettersConfirm) {
    finalPassword = createPassword.length + lowercase

  }

  if (uppercaseLettersConfirm) {
    finalPassword = createPassword.length + uppercase

  }

  if (numbersConfirm) {
    finalPassword = createPassword.length + num

  }

  if (specialCharactersConfirm) {
    finalPassword = createPassword.length + specialCharacters

  }



  for(var i = 0; i < createPassword.length; i++)




// 2. Validate the input




// 3.generate password based on criteria
// 

// 4. display generated password
  return finalPassword;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// for loop- needs to run 9, set loop for 8
// google search: window.prompt, window.confirm, window.alert
// think about specific boxes/ array that contain things like (letters, numbers, characters)
// Store the user password
// spend time reviewing code in challenges in mini-project main folder
// psuedo coding: use else, else if, etc.
// JavaScript is all about logic
// Work on the small things one step at a time
// DO NOT CHANGE THE STARTED CODE IN JS

// Need to make generate password function
