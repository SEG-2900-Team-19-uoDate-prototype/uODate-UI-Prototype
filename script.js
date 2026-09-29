/* Im thinking our website could advertise the dating service and then at the bottom
have a button that says like get started and then when you click it it brings you
to a login/signup page, that obvioulsy doesnt work but yk */

const button = document.getElementById("get-started") // the button would also have to have this id
// but again if you have a diff format u can let me know

button.addEventListener("click", () => {
    window.location.href = "login-signup.html" // btw mahad this would require a separate html file
// you dont have to call it that tho  if you have a diff name you can let me know
})



const login = document.getElementById("login") // this would be the id for the login button on the login-signup.html page


// this code will make it so when you try and login, the browser will just alert that it doesnt work 
login.addEventListener("click", () => {
    alert("We're still working on this part :(")
})
