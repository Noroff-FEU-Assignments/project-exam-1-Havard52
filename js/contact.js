const form = document.querySelector ("form");
const eMailContact = document.querySelector ("#eMailContact");
const emailContactError= document.querySelector ("#emailContactError");
const teleContact = document.querySelector ("#teleContact");
const teleContactError = document.querySelector ("#teleContactError");
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
    checkValue(teleContact.value, 8) && 
    checkValue(mesageContact.value, 20)
    ){
    contactResponse.innerHTML = "Thank you for your feedback!";
    contactResponse.style.color = "green";
    form.reset();
    } else {
    contactResponse.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    contactResponse.style.color = "#BA112A";
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

