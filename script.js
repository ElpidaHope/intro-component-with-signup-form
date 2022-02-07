let firstName = document.querySelector(".first-name input");
let lastName = document.querySelector(".last-name input");
let userEmail = document.querySelector(".email input");
let userPassword = document.querySelector(".password input");
let form = document.querySelector("form"); 

const checkEmptyInput = (input) => {
        if (input.value === "") {
            return true
        }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const addErrorClass = (value) => {
    value.parentNode.classList.add("error")
}

const removeErrorClass = (value) => {
    value.parentNode.classList.remove("error")
}

const validateInput = (value) => {
    if (checkEmptyInput(value)) {
        addErrorClass(value)
    }
    else {
        removeErrorClass(value)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput(firstName)
    validateInput(lastName)
    validateInput(userEmail)
    validateInput(userPassword)

    if (!checkEmptyInput(firstName) && !checkEmptyInput(lastName) && !checkEmptyInput           (userEmail) && !checkEmptyInput(userPassword)) {
      firstName.value = ""
      lastName.value = ""
      userEmail.value = ""
      userPassword.value = ""
  }
   
})
