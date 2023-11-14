const form = document.querySelector ("form");
const eMailContact = document.querySelector ("#emailContact");
const emailContactError= document.querySelector ("#emailContactError");
const mesageContact = document.querySelector ("#mesageContact");
const messageContactError = document.querySelector ("#messageContactError");
const submitButton = document.querySelector ("#submitButton");
const contactResponse = document.querySelector ("#contactResponse");

function contactValidation (event) {
    event.preventDefault();

    if (checkEmail(eMailContact.value)){
        emailContactError.style.display = "none";
    } else {
        emailContactError.style.display = "block";
    }

    if (checkValue(mesageContact.value, 20)) {
        messageContactError.style.display = "none";
    } else {
        messageContactError.style.display = "block";
    }
   
    if (
    checkEmail(eMailContact.value) && 
    checkValue(mesageContact.value, 20)
    ){
    contactResponse.innerHTML = "Thank you for your feedback!";
    form.reset();
    } else {
    contactResponse.innerHTML = `Please fill in the form correctly`;
    }
};

form.addEventListener("submit", contactValidation);

function checkValue (value, len){
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function checkEmail(eMail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(eMail);
    return patternMatches;
};

