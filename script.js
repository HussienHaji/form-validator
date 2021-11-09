const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using Contrint API
  isValid = form.checkValidity();

  if (!isValid) {
    // Style main message for error
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderBlockColor = "teal";
    password2El.style.borderBlockColor = "teal";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwoeds match";
    message.style.color = "red";
    messageContainer.style.borderBlockColor = "red";
    password1El.style.borderBlockColor = "red";
    password2El.style.borderBlockColor = "red";
    return;
  }
  // if form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = "Sucessfuly Registered!";
    message.style.color = "green";
    messageContainer.style.borderBlockColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFromData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit data if valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Event listener
form.addEventListener("submit", processFromData);
