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
var requirement = [0,0,0,0]

// Write password to the #password input
function writePassword() {
  //reset the variables on re-run
  requirement = [0,0,0,0]
  charLow = false;
  charUpp = false;
  charNum = false;
  charSpe = false;
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
    
    var password = generatePassword()

    console.log(requirement.includes(1))

    console.log(requirement)
    // run until requirements are met
    while(requirement.includes(1)){
      password = generatePassword()
    }

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
  requirement = [0,0,0,0]
  // depending on what the user entered add to the total set of allowed characters
  if(charLow){
    passSet = passSet.concat(charLowSet)
    requirement[0]++
  }
  if(charUpp){
    passSet = passSet.concat(charUppSet)
    requirement[1]++
  }
  if(charNum){
    passSet = passSet.concat(charNumSet)
    requirement[2]++
  }
  if(charSpe){
    passSet = passSet.concat(charSpeSet)
    requirement[3]++
  }

  // Adding random characters from the total allowed characters
  for(i=0;i<passLen;i++){
    // generate random number between 0 and the full length of the password character set
    var randomChar = Math.floor(Math.random() * passSet.length)
    
    var currentChar = passSet.charAt(randomChar)
   
    // check if 
    if(requirement[0] == 1){
      if(charLowSet.includes(currentChar)){
        requirement[0]++
      }
    }
    if(requirement[1] == 1){
      if(charUppSet.includes(currentChar)){
        requirement[1]++
      }
    }
    if(requirement[2] == 1){
      if(charNumSet.includes(currentChar)){
        requirement[2]++
      }
    }
    if(requirement[3] == 1){
      if(charSpeSet.includes(currentChar)){
        requirement[3]++
      }
    }
    
    // add the random char to the password
    password += currentChar
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
