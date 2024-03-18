const textInput = document.getElementById("text-input");
const  button = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome(str){
const newStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
return newStr === newStr.split("").reverse().join("");
}

button.addEventListener("click",function(){
const inputValue = textInput.value;
 if (inputValue === ""){
   alert("Please input a value");
   return;
 }
if (checkPalindrome(inputValue)){
  resultDiv.textContent = inputValue + " is a palindrome.";
}
else{
  resultDiv.textContent = inputValue + " is not a palindrome.";
}
});

