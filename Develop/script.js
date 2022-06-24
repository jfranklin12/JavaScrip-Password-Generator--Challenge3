// Assignment Code
var generateBtn = document.querySelector("#generate");

 

// 1. Prompt the user for the password criteria
function generatePassword() {
  console.log("Hey you clicked the button!");
  password = window.prompt("How many characters will you password to contain?")
//  a.password between 8 and 128
  if(password < 8 || password > 128) {
    window.alert("Your password must be between 8 and 128 characters.")
    window.prompt("How many characters will you password to contain?");
  } 
//  b. Lowercase
  else {
    window.prompt("Do you want lowercase letters?")
    for (var c = 0; c <= password; c++) {
      console.log(c);
    }   
  }
  if (passowrd = true){
    window.prompt("Do you want uppercase letters?")
  }

  else {
    window.prompt("Do you want uppercase letters?")
  }


  if (true || false){
  window.prompt("Do you want numbers?")
  }







//  c. Uppercase
//  d. Special Characters
//  e. numbers
// 2. Validate the input
// 3.generate password based on criteria
// 

// 4. display generated password
  return password;
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
