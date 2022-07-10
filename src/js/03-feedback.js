import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(formData, 1000));
form.addEventListener('submit', onHandleSubmit);

const readData = localStorage.getItem(LOCALSTORAGE_KEY);
const parseData = JSON.parse(readData);
try {
          if (parseData) {
    form.email.value = parseData.email;
    form.message.value = parseData.message; 
} else {
    form.email.value = "";
    form.message.value = ""; 
}
  } catch (error) {
      console.log("parsing error");
}

function formData() {
     const data = {
        email: form.email.value,
        message: form.message.value,
     }
 
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
}

function onHandleSubmit(event) {
    event.preventDefault();
    
     const {
        elements: { email, message }
    } = event.currentTarget;

     const data = {
        email: email.value,
        message: message.value,
     }
    console.log(data);
    
   event.currentTarget.reset();
   form.message.value = "";  
   localStorage.clear();
}