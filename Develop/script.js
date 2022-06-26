// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","?","~"];

var userChoice;

var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
console.log(lowercase)


 

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


  if (lowercaseLettersConfirm) {

  }

  for (var c = 0; c <= password; c++) {
    console.log(c);
  
  } 




// 2. Validate the input




// 3.generate password based on criteria
// 

// 4. display generated password
  // return "";
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//   } if (confirm("Do you want lowercase letters?") == true){
//     // window.prompt("Do you want uppercase letters?")
//     // var randomLowercase = lowercase[Math.floor(Math.random()*lowercase.length)]
//     for(var l = 0; l <= lowercase; l++){
//       var password = password + lowercase.charAt(Math.flood(math.random()*Math.floor(lowercase.length --)));
//       console.log(password);
//      }
//     }
  

  //   } else {
  //   window.prompt("Do you want uppercase letters?")
  //   passwordL = password;
  // }

  // if (confirm == true){
  //   window.prompt("Do you want numbers?")
  // }  else {
  //   window.prompt("Do you want numbers?")
  // }

  // if (confirm) {
  //   window.prompt("Do you want special characters?")
  // } else {
  //   window.prompt("Do you want special characters?")
  // }


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
