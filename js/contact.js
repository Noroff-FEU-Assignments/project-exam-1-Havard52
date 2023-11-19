const form = document.querySelector ("form");
const nameContact = document.querySelector ("#nameContact");
const nameContactError= document.querySelector ("#nameContactError");
const eMailContact = document.querySelector ("#emailContact");
const emailContactError= document.querySelector ("#emailContactError");
const subjectContact = document.querySelector ("#subjectContact");
const subjectContactError= document.querySelector ("#subjectContactError");
const mesageContact = document.querySelector ("#mesageContact");
const messageContactError = document.querySelector ("#messageContactError");
const submitButton = document.querySelector ("#submitButton");
const contactResponse = document.querySelector ("#contactResponse");

function contactValidation (event) {
    event.preventDefault();

    if (checkValue(nameContact.value, 5)){
        nameContactError.style.display = "none";
    } else {
        nameContactError.style.display = "block";
    }

    if (checkEmail(eMailContact.value)){
        emailContactError.style.display = "none";
    } else {
        emailContactError.style.display = "block";
    }

    if (checkValue(subjectContact.value, 15)){
        subjectContactError.style.display = "none";
    } else {
        subjectContactError.style.display = "block";
    }

    if (checkValue(mesageContact.value, 25)) {
        messageContactError.style.display = "none";
    } else {
        messageContactError.style.display = "block";
    }
   
    if (
    checkValue(nameContact.value, 5) && 
    checkEmail(eMailContact.value) && 
    checkValue(subjectContact.value, 15) && 
    checkValue(mesageContact.value, 25)
    ){
    contactResponse.innerHTML = "Thank you for your feedback!";
    form.reset();
    } else {
    contactResponse.innerHTML = `Please fill in the form correctly.`;
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

