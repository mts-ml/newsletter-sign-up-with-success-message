const form = document.querySelector("form")

const emailInput = document.getElementById("email")

const emailError = document.querySelector("span.error")

const emailCorrect = document.querySelector("span.correct")

const emailRegex = /^[a-z][a-z0-9._*-]+[@][a-z][0-9a-z*_.-]+[.](com|org)$/


function validateEmail() {
   let allValid = false
   
   if (emailInput.value.length >= 10 && emailRegex.test(emailInput.value)) {
      allValid = true
   }
   
   if (!allValid) {
      emailCorrect.innerHTML = ''
      emailInput.style.backgroundColor = '#fdd';
      emailInput.style.borderColor = 'rgb(255, 48, 48)';
      showError()
   } else {
      // In case there is an error message visible, if the field is valid, remove the error message.
      emailError.innerHTML = ''
      emailInput.style.backgroundColor = 'rgba(121, 255, 121, 0.1)';
      emailInput.style.border = '1px solid green';
      emailCorrect.innerHTML = `Valid <i class="fas fa-check-circle"></i>`
   }
   
   return allValid
}

emailInput.addEventListener('input', validateEmail)


function showError() {
   if (emailInput.value.length <= 0) {
      // If the field is empty, display the following error message.
      emailError.textContent = "You need to enter an email address."
   } else if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Make sure you enter a valid email, with '@' and '.com' or '.org'"
   } else if (emailInput.value.length < 10) {
      // If the data is too short
      emailError.textContent = `Email should be at least ${emailInput.minLength} characters, you entered ${emailInput.value.length}.`
   }
}


form.addEventListener("submit", (event) => {
   event.preventDefault()

   const allValid = validateEmail()

   if (!allValid) {
      emailInput.focus()
      showError()
   } else {
      const email = emailInput.value
      localStorage.setItem('Email', email)
      window.location.href = 'message.html'
   }
})
