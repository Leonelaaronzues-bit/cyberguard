// Welcome button

function showWelcome() {

    alert(
        "🛡️ Welcome to CyberGuard!\nProtect your digital world."
    );

}




// Password Security Checker

function checkPassword() {


    const password =
    document.getElementById("password").value;


    const result =
    document.getElementById("result");



    if(password.length === 0){

        result.innerHTML =
        "⚠️ Enter a password first.";

        result.style.color = "orange";

        return;

    }



    let score = 0;


    if(password.length >= 8)
        score++;


    if(password.length >= 12)
        score++;


    if(/[A-Z]/.test(password))
        score++;


    if(/[a-z]/.test(password))
        score++;


    if(/[0-9]/.test(password))
        score++;


    if(/[^A-Za-z0-9]/.test(password))
        score++;





    if(score <= 2){

        result.innerHTML =
        "🔴 Weak Password<br>Score: "
        + score + "/6";

        result.style.color="red";

    }


    else if(score <=4){

        result.innerHTML =
        "🟠 Medium Password<br>Score: "
        + score + "/6";

        result.style.color="orange";

    }


    else {

        result.innerHTML =
        "🟢 Strong Password<br>Score: "
        + score + "/6";

        result.style.color="#00ff99";

    }


}






// Password Generator


function generatePassword(){


    const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";


    let password = "";



    for(let i=0;i<14;i++){

        password +=
        characters.charAt(
        Math.floor(Math.random()*characters.length)
        );

    }



    document.getElementById("generated").innerHTML =
    "🔑 Generated Password:<br>" + password;


}







// Simple URL Checker


function checkURL(){


    const url =
    document.getElementById("url").value;


    const result =
    document.getElementById("urlResult");



    if(url.length===0){

        result.innerHTML =
        "⚠️ Enter a URL.";

        result.style.color="orange";

        return;

    }




    if(
    url.includes("http") &&
    !url.includes(" ")
    ){

        result.innerHTML =
        "🟢 URL format looks normal. Stay careful.";

        result.style.color="#00ff99";

    }


    else {


        result.innerHTML =
        "🔴 Suspicious URL format.";

        result.style.color="red";

    }



}