const button = document.querySelector('button#return')
const email = document.querySelector('strong')

button.addEventListener('click', () => {
   window.location.href = 'index.html'
})


const emailOnLocalStorage = localStorage.getItem('Email')
if (emailOnLocalStorage) {
   email.innerHTML = emailOnLocalStorage
}
