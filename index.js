const form = document.querySelector("form")

const emailInput = document.getElementById("email")

const emailError = document.querySelector("span.error")

const emailCorrect = document.querySelector("span.correct")


emailInput.addEventListener("input", (event) => {
   if (emailInput.validity.valid) {
      // In case there is an error message visible, if the field is valid, we remove the error message.
      emailError.innerHTML = ''

      emailCorrect.innerHTML = `Valid <i class="fas fa-check-circle"></i>`
   } else {
      emailCorrect.innerHTML = ''
      showError()
   }
})


function showError() {
   if (emailInput.validity.valueMissing) {
      // If the field is empty, display the following error message.
      emailError.textContent = "You need to enter an email address."
   } else if (emailInput.validity.typeMismatch) {
      // If the field doesn't contain an email address
      emailError.textContent = "Entered value needs to be an email address."
   } else if (emailInput.validity.tooShort) {
      // If the data is too short
      emailError.textContent = `Email should be at least ${emailInput.minLength} characters, you entered ${emailInput.value.length}.`
   }
}


form.addEventListener("submit", (event) => {
   event.preventDefault()

   if (!emailInput.validity.valid) {
      showError()
   } else {
      window.location.href = 'message.html'
   }
})
