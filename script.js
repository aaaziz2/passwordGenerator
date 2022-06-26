// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLen = 8;
var charLow = false;
var charUpp = false;
var charNum = false;
var charSpe = false;

var charLowSet = "abcdefghijklmnopqrstuvxyz"
var charUppSet = charLowSet.toUpperCase();
var charNumSet = "0123456789"
var charSpeSet = "!@#$%^&*()\"\'+,-./:;<>=?[]\\_`{}|~"

// Write password to the #password input
function writePassword() {
  if(confirm("Do you want generate a password?")){
    if(confirm("Do you want lowercase letters?")){
      charLow = true;
    }
    if(confirm("Do you want upppercase letters?")){
      charUpp = true;
    }
    if(confirm("Do you want numbers?")){
      charNum = true;
    }
    if(confirm("Do you want special characters?")){
      charSpe = true;
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }
  passwordText.value = password;
}

function generatePassword(){
  var password = "Dummy#1!"
  var passSet = "";
  if(charLow){
    passSet = passSet.concat(charLowSet);
    console.log(passSet);
  }
  if(charUpp){
    passSet = passSet.concat(charUppSet);
    console.log(passSet);
  }
  if(charNum){
    passSet = passSet.concat(charNumSet)
    console.log(passSet)
  }
  if(charSpe){
    passSet = passSet.concat(charSpeSet)
    console.log(passSet)
  }

  // for(i=0;i<passLen;i++){

  // }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
