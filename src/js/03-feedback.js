import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(`.feedback-form`),
    email: document.querySelector(`input`),
    message: document.querySelector(`textarea`),
};
console.log(refs.message);

let formData = {};
const LOCALSTORAGE_KEY = `feedback-form-state`;

refs.form.addEventListener(`input`, throttle(onFormImput, 500 ));
refs.form.addEventListener(`submit`, onFormSubmit);
    

function onFormImput(event) {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};



function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function populateTextArea() {
    const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsed = JSON.parse(savedMessage);
 if(savedMessage) {
        const parsedSavedMes = JSON.parse(savedMessage);
        let formData = {};
        formData = parsedSavedMes;
        refs.email.value = parsedSavedMes.email;
        refs.message.value = parsedSavedMes.message;
console.log(parsedSavedMes)
    }
}

populateTextArea ()