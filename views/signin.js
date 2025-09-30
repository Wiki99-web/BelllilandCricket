// scripts.js
// document.getElementById("signin-form").addEventListener("submit", function(event){
//     event.preventDefault();
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
    
//     // Redirect to a specified website
//     window.location.href = "file:///D:/HTML+Java_Practical/CricketWebsite.html#shop";
// });

const charArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const PasswordGenerator = () =>{
    for(let i = 0; i<3; i++){
        const numbers = Math.floor(Math.random()*10)
        const characters = Math.floor(Math.random()*charArr.length)
        const FullPassword = (numbers+charArr[characters])
        // console.log(numbers+charArr[characters])
        // console.log(charArr[characters])
        document.getElementById('random_pass').innerText += FullPassword
    }
}
PasswordGenerator()