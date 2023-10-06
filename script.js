var generateBtn = document.querySelector("#generate");

function passwordLength(){
  var length = prompt("Enter password lenth (8 to 128)");
  
  if (length < 8 || length > 128){
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  return length;
}

generateBtn.addEventListener("click", function(){
  var length = passwordLength();

  if (length !== null){
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
});

function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial){
  var charset = "";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecial) charset += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  if (charset === ""){
    alert("Choose at least one character type.");
    return "";
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}