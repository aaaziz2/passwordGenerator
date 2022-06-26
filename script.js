// Assignment Code
var generateBtn = document.querySelector("#generate");

//global password variables
var passLen = 8;
var charLow = false;
var charUpp = false;
var charNum = false;
var charSpe = false;

//password requirement variables
var charLowSet = "abcdefghijklmnopqrstuvxyz"
var charUppSet = charLowSet.toUpperCase()
var charNumSet = "0123456789"
var charSpeSet = "!@#$%^&*()\"\'+,-./:;<>=?[]\\_`{}|~"

// Write password to the #password input
function writePassword() {

  // // reset when password button is clicked again adding if time allows
  // if(document.querySelector("#password").value != "Your Secure Password"){
  //   document.
  // }
  
  // confirmation that password is to be generated
  if(confirm("Do you want generate a password?")){
    // asks user which requirements are necessary
    if(confirm("Do you want lowercase letters?")){
      charLow = true;
    }
    if(confirm("Do you want uppercase letters?")){
      charUpp = true;
    }
    if(confirm("Do you want numbers?")){
      charNum = true;
    }
    if(confirm("Do you want special characters?")){
      charSpe = true;
    }
    // make sure user chooses at least one category
    if((charLow == charUpp && charUpp == charNum && charNum == charSpe) && charLow == false){
      return
    }
    // ask user for password length
    passLen = prompt("How long do you want your Password? \n Enter a number between 8-128 \n OK for default length of 8")
    if(passLen == ""){
      passLen = 8
    }
    // makes sure the length is in the correct parameters
    if(passLen<8 || passLen>128){
      alert("Invalid Length! Please try again")
      return
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }
  // if cancel is selected the password is not generated
  else{
    return
  }
  passwordText.value = password;
}

function generatePassword(){
  // default values of password and set of allowed characters
  var password = ""
  var passSet = ""
  // depending on what the user entered add to the total set of allowed characters
  if(charLow){
    passSet = passSet.concat(charLowSet);
    // console.log(passSet);
  }
  if(charUpp){
    passSet = passSet.concat(charUppSet);
    // console.log(passSet);
  }
  if(charNum){
    passSet = passSet.concat(charNumSet)
    // console.log(passSet)
  }
  if(charSpe){
    passSet = passSet.concat(charSpeSet)
    // console.log(passSet)
  }
  // making sure that the password is correct length per user request for debugging
  // console.log(passLen)

  // Adding random characters from the total allowed characters
  for(i=0;i<passLen;i++){
    // generate random number between 0 and the full length of the password character set
    var randomChar = Math.floor(Math.random() * passSet.length)
    
    // console.log(randomChar)
    // console.log(passSet.charAt(randomChar))
    
    // add the random char to the password
    password += passSet.charAt(randomChar)
  }

  // Check to make sure all characters are included !!needs work
  for(j=0; j<password.length; j++){

  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
