const formMessage = document.querySelector(".form-message");
const success = document.querySelector(".form-success");
const nameField = document.querySelector(".name-field");
const emailField = document.querySelector(".email-field");
const messageField = document.querySelector(".message-field");
const fail = document.querySelector(".form-fail");
const form = document.getElementsByTagName("form");

const formMessagePrevent = (e) => {
    // e.preventDefault();
    if (nameField.value == "" || emailField.value == "" || messageField.value == "") {
        formMessage.classList.add("form-message-show");
        formMessage.children[0].remove();
        formMessage.insertAdjacentHTML("afterbegin",`<p class="form-attention">Some fields are empty. Please, fill them and then continue</p>`);

        
    }
    formMessage.classList.add("form-message-show");
    formMessage.innerHTML = `<p class="form-success form-message-show">Form submitted successfully!`;
    success.classList.add("form-message-show");
}

const formMessageShow = (e) => {
    if (nameField.value == "" || emailField.value == "" || messageField.value == "") {
        formMessage.classList.add("form-message-show");
        formMessage.children[0].remove();
        formMessage.insertAdjacentHTML("afterbegin",`<p class="form-attention">Some fields are empty. Please, fill them and then continue</p>`);

        
    }
        
    
}

const formMessageHide = (e) => {
        formMessage.classList.remove("form-message-show");
}


form[0].addEventListener("submit", formMessagePrevent);
nameField.addEventListener("focus", formMessageHide);
emailField.addEventListener("focus", formMessageHide);
messageField.addEventListener("focus", formMessageHide);
nameField.addEventListener("blur", formMessageShow);
emailField.addEventListener("blur", formMessageShow);
messageField.addEventListener("focus", formMessageHide);

