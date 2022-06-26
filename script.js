// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLen = 8;
var charLow = true;
var charUpp = true;
var charNum = true;
var charSpe = true;

var charLowSet = "abcdefghijklmnopqrstuvxyz"
var charUppSet = charLowSet.toUpperCase();
var charNumSet = "0123456789"
var charSpeSet = "!@#$%^&*()\"\'+,-./:;<>=?[]\\_`{}|~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if(confirm("Do you want to write a password")){
  //   if(confirm)
  // }
  else{
    break
  }
  passwordText.value = password;
  
}

function generatePassword(){
  var password = ""
  var passSet = ""
  if(charLow){
    passSet.concat(charLowSet)
  }
  if(charUpp){
    passSet.concat(charLowSet)
  }
  if(charNum){
    passSet.concat(charNumSet)
  }
  if(charSpe){
    passSet.concat(charSpeSet)
  }

  for(i=0;i<passLen;i++){

  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
