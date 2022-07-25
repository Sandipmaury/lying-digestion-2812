let form = document.querySelector("#login-form");

let users = JSON.parse(localStorage.getItem("users")) || [];

let login = (event) => {
  event.preventDefault();
  let usrObj = {
    email: form.email.value,
    password: form.password.value,
  };
  if (usrObj.email == "" || usrObj.password == "") {
    alert("All feilds are required.");
  } else {
    for (let { email, password } of users) {
      if (usrObj.email == email && usrObj.password == password) {
        let login = true;
        localStorage.setItem("login", JSON.stringify(login));
        window.location.href = "../index.html";
        return;
      }
    }
    alert("Email or Password is incorrect.");
    return;
  }
};

form.addEventListener("submit", login);
