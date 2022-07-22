let form = document.querySelector("#signup-form");
let usrData = JSON.parse(localStorage.getItem("users")) || [];

let signup = () => {
    let usrObj = {
        email: form.email.value,
        password: form.password.value
    }

    if(usrObj.email == "" || usrObj.password == ""){
        alert("All feilds are required.")
    }
    else{
        usrData.push(usrObj);
        localStorage.setItem("users",JSON.stringify(usrData));
        let login = true;
        localStorage.setItem("login", JSON.stringify(login));
        window.location.href = "./index.html";
    }
}

form.addEventListener("submit", signup);