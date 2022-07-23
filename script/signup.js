let form = document.querySelector("#form");
let usrData = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let usrObj = {
    email: form.email.value,
    password: form.password.value,
  };
  if (usrObj.email == "" || usrObj.password == "") {
    alert("All feilds are required.");
  } else {
    usrData.push(usrObj);
    localStorage.setItem("users", JSON.stringify(usrData));
    let login = true;
    localStorage.setItem("login", JSON.stringify(login));
    window.location.href = "../index.html";
  }
});
