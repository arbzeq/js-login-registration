function validateRegistration(){
    let regForm = document.querySelector("#regForm");
    regForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event);

        try {
            let name = event.target.name.value;
            let username = event.target.username.value;
            let email = event.target.name.value;
            let password = event.target.password.value;
            let confirmPassword = event.target.confirmPassword.value;

            if(password != confirmPassword) {
                throw new Error(`The passwords do not match! ${event.timeStamp}`);
                
            }
            
        } catch(error) {
            errorElement = document.querySelector('.errorInfo');
            errorElement.textContent = error.message;
            errorElement.style.display = "block";
        }
        
    })
}


function setup(){
    validateRegistration();
}

setup();