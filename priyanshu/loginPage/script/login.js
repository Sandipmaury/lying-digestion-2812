let form = document.querySelector("#login-form");

let users = JSON.parse(localStorage.getItem('users')) || [];


let login = () => {
    event.preventDefault();
    let usrObj = {
        email: form.email.value,
        password: form.password.value
    }
    if(usrObj.email == "" || usrObj.password == ""){
        alert("All feilds are required.")
    }
    else{
        users.forEach(el => {
            if(usrObj.email == el.email && usrObj.password == el.password){
                let login = true;
                localStorage.setItem("login", JSON.stringify(login));
                window.location.href = "./index.html";
            }
            else{
                alert("Email or Password is incorrect.")
            }
        })
    }
}
import navvbar from '/mayuri/components/navvbar.js'
document.getElementById('navbar').innerHTML = navvbar();
form.addEventListener("submit", login);