const form = document.querySelector("form");

const email = document.getElementById("email");

const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", () => {
   if (email.validity.valid) {
      // In case there is an error message visible, if the field is valid, we remove the error message.
      emailError.textContent = ""; // Reset the content of the message
      emailError.className = "error"; // Reset the visual state of the message
   } else {
      showError();
   }
})

form.addEventListener("submit", (event) => {
   if (!email.validity.valid) {
      showError();
      event.preventDefault();
   }
})

function showError() {
   if (email.validity.valueMissing) {
      // If the field is empty, display the following error message.
      emailError.textContent = "You need to enter an email address."
   } else if (email.validity.typeMismatch) {
      // If the field doesn't contain an email address
      emailError.textContent = "Entered value needs to be an email address.";
   } else if (email.validity.tooShort) {
      // If the data is too short
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
   }

   emailError.className = "error active";
}
