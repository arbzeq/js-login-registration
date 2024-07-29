function validateRegistration(){
    let regForm = document.querySelector("#regForm");
    regForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event);
    })
}


function setup(){
    validateRegistration();
}

setup();