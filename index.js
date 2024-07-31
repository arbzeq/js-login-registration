let loginForm = document.querySelector("#loginForm");
let regForm = document.querySelector("#regForm");
let loginTab = document.querySelector("#loginTab");
let regTab = document.querySelector("#regTab")
let currentForm = loginForm;


loginTab.addEventListener("click", () => {
    loginForm.classList.remove("dont-display");
    regForm.classList.add("dont-display");
    currentForm = loginForm;
});

    

regTab.addEventListener("click", () => {
    loginForm.classList.add("dont-display");
    regForm.classList.remove("dont-display");
    currentForm = regForm;
});

regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let eventTarget = event.target;
    console.log(event);
    try {
        let name = eventTarget.name.value;
        let username = eventTarget.username.value;
        let email = eventTarget.name.value;
        let password = eventTarget.password.value;
        let confirmPassword = eventTarget.confirmPassword.value;
        
        if(password.length < 8) {
            throw new Error(`The password is too short!`);
        }
        if(password != confirmPassword) {
            throw new Error(`The passwords do not match! ${event.timeStamp}`);
        }


        
    } catch(error) {
        
        eventTarget.errorInfo.textContent = error.message;
        eventTarget.style.display = "block";
    }
    
})