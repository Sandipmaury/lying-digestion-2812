let form = document.querySelector("#signup-form");
let usrData = JSON.parse(localStorage.getItem("users")) || [];
let button = document.querySelector("#button");
button.disabled = false;

let signup = () => {
    let usrObj = {
        email: form.email.value,
        password: form.password.value
    }

    if(usrObj.email == "" || usrObj.password == ""){
        alert("All fields are required.")
    }
    else{
        usrData.push(usrObj);
        localStorage.setItem("users",JSON.stringify(usrData));
        let login = true;
        localStorage.setItem("login", JSON.stringify(login));
        window.location.href = "./index.html";
    }
}

import navvbar from '/mayuri/components/navvbar.js'
document.getElementById('navbar').innerHTML = navvbar();

form.addEventListener("submit", signup);